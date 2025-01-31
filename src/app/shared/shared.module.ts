import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconDefinition } from '@ant-design/icons-angular';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ExpandOutline, AlertFill, AlertOutline } from '@ant-design/icons-angular/icons';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzAlertModule } from 'ng-zorro-antd/alert';

import * as AllIcons from '@ant-design/icons-angular/icons';

import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { RouterModule } from '@angular/router';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTreeModule } from 'ng-zorro-antd/tree';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';

import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { HotkeyModule } from 'angular2-hotkeys';
import { NzMentionModule } from 'ng-zorro-antd/mention';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};

const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => {
  const i = antDesignIcons[key];
  return i;
});
@NgModule({
  declarations: [],
  imports: [
    NzSelectModule,
    NzDrawerModule,
    CommonModule,
    NzAlertModule,
    NzDropDownModule,
    NzProgressModule,
    NzEmptyModule,
    NzRadioModule,
    HotkeyModule,
    RouterModule,
    NzToolTipModule,
    NzAvatarModule,
    NzTreeModule,
    NzMenuModule,
    NzIconModule.forRoot(icons),
    NzFormModule,
    NzCommentModule,
    NzResultModule,
    NzButtonModule,
    NzTypographyModule,
    NzGridModule,
    NzDividerModule,
    NzLayoutModule,
    NzSkeletonModule,
    NzSpaceModule,
    NzAffixModule,
    NzInputModule,
    NzTreeSelectModule,
    NzInputNumberModule,
    FormsModule,
    NzListModule,
    ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
    NzCheckboxModule,
    NzModalModule,
    NzStatisticModule,
    NzPageHeaderModule,
    NzDatePickerModule,
    NzDescriptionsModule,
    NzTableModule,
    NzCollapseModule,
    NzBadgeModule,
    NzCardModule,
    NzTabsModule,
    NzStepsModule,
    NzPopoverModule,
    NzTagModule,
    NzUploadModule,
    NzStatisticModule,
    NzNotificationModule,
    NzDrawerModule,
    NzSelectModule,
    NzNotificationModule,
    NzDrawerModule,
    NzSelectModule,
    NzImageModule,
    NzPopconfirmModule,
    NzSwitchModule,
    NzMessageModule,
    NzPaginationModule,
    NzCalendarModule,
    NzMentionModule,
    NzBreadCrumbModule
  ],
  exports: [
    NzSelectModule,
    NzDrawerModule,
    NzFormModule,
    NzSkeletonModule,
    NzListModule,
    NzEmptyModule,
    HotkeyModule,
    NzButtonModule,
    NzResultModule,
    NzTypographyModule,
    NzGridModule,
    NzDividerModule,
    NzLayoutModule,
    NzSpaceModule,
    NzProgressModule,
    NzDatePickerModule,
    NzMenuModule,
    NzAffixModule,
    NzMessageModule,
    NzTreeModule,
    NzIconModule,
    NzRadioModule,
    NzAlertModule,
    NzPaginationModule,
    NzInputModule,
    NzInputNumberModule,
    FormsModule,
    ReactiveFormsModule,
    NzCommentModule,
    NzAvatarModule,
    NzCheckboxModule,
    NzModalModule,
    NzStatisticModule,
    NzPageHeaderModule,
    NzDescriptionsModule,
    NzTableModule,
    NzCollapseModule,
    NzBadgeModule,
    NzTabsModule,
    NzCardModule,
    NzPopoverModule,
    NzStepsModule,
    NzTagModule,
    NzUploadModule,
    NzNotificationModule,
    NzStatisticModule,
    NzDrawerModule,
    NzSelectModule,
    NzImageModule,
    NzPopconfirmModule,
    NzTreeSelectModule,
    NzSwitchModule,
    NzDropDownModule,
    NzToolTipModule,
    NzCalendarModule,
    NzMentionModule,
    NzBreadCrumbModule
  ],
  providers: [{
    provide: NZ_ICONS,
    useValue: icons
  }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class SharedModule { }
