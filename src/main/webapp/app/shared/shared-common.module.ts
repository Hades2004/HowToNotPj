import { NgModule } from '@angular/core';

import { HowToNotPjSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [HowToNotPjSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [HowToNotPjSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class HowToNotPjSharedCommonModule {}
