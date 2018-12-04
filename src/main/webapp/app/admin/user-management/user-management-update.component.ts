import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {Country, User, UserService} from 'app/core';
import {HttpResponse} from '@angular/common/http';

@Component({
    selector: 'jhi-user-mgmt-update',
    templateUrl: './user-management-update.component.html'
})
export class UserMgmtUpdateComponent implements OnInit {
    user: User;
    countries: Country[];
    languages: any[];
    authorities: any[];
    isSaving: boolean;
    selectedCountryCode = '';

    constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) {}

    ngOnInit() {
        this.isSaving = false;
        this.route.data.subscribe(({ user }) => {
            this.user = user.body ? user.body : user;
            this.userService.countries().subscribe( (res: HttpResponse<Country[]>)  => {
                this.countries = res.body;

                const userCountryCode = this.user !== null ? this.user.countryCode : null;
                if (this.user !== null) {
                    const customerCountry = this.countries.find(function(country) {
                        return country.countryCode === userCountryCode;
                    });
                    if (customerCountry) {
                        this.selectedCountryCode = customerCountry.countryCode;
                    }
                }
            });
        });
        this.authorities = [];
        this.userService.authorities().subscribe(authorities => {
            this.authorities = authorities;
        });
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        this.user.countryCode = this.selectedCountryCode;
        if (this.user.id !== null) {
            this.userService.update(this.user).subscribe(response => this.onSaveSuccess(response), () => this.onSaveError());
        } else {
            this.user.langKey = 'en';
            this.userService.create(this.user).subscribe(response => this.onSaveSuccess(response), () => this.onSaveError());
        }
    }

    private onSaveSuccess(result) {
        this.isSaving = false;
        this.previousState();
    }

    private onSaveError() {
        this.isSaving = false;
    }
}
