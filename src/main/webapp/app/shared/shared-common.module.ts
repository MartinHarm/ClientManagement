import { NgModule } from '@angular/core';

import { FormsSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [FormsSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [FormsSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class FormsSharedCommonModule {}
