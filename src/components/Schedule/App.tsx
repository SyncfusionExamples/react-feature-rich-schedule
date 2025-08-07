import React from 'react';
import './App.css';
import { Fragment, useEffect, useRef, useState, useCallback, useMemo } from 'react';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Year, TimelineViews, TimelineMonth, TimelineYear, ViewsDirective, ViewDirective, ResourcesDirective, ResourceDirective, Inject, Resize, DragAndDrop, Agenda, MonthAgenda, Print, ExcelExport, ICalendarImport, ICalendarExport, View, ResourcesModel, CellClickEventArgs, ResourceDetails, ActionEventArgs, CalendarType, WeekRule, EventSettingsModel, SpannedEventPlacement, EJ2Instance, CellTemplateArgs, GroupModel, TreeViewArgs, PopupOpenEventArgs, CurrentAction, getWeekNumber, getWeekLastDate, EventRenderedArgs, HeaderRowsModel, ToolbarItemsDirective, ToolbarItemDirective, ViewsModel, ResizeEventArgs, PopupCloseEventArgs, EventClickArgs, NavigatingEventArgs } from '@syncfusion/ej2-react-schedule';
import { AppBarComponent, MenuComponent, ClickEventArgs, SidebarComponent, AccordionComponent, AccordionItemsDirective, AccordionItemDirective, TreeViewComponent, DragAndDropEventArgs, ContextMenuComponent, BeforeOpenCloseMenuEventArgs, MenuEventArgs as ContextMenuEventArgs, MenuItemModel, ChangeEventArgs as SidebarChangeEventArgs, EventArgs as SidebarEventArgs } from '@syncfusion/ej2-react-navigations';
import { ButtonComponent, CheckBoxComponent } from '@syncfusion/ej2-react-buttons';
import { DropDownListComponent, ChangeEventArgs, FieldSettingsModel, MultiSelectComponent, CheckBoxSelection } from '@syncfusion/ej2-react-dropdowns';
import { DropDownButtonComponent, ItemModel, MenuEventArgs } from '@syncfusion/ej2-react-splitbuttons';
import { BeforeOpenEventArgs, DialogComponent, TooltipComponent, AnimationSettingsModel, TooltipEventArgs } from '@syncfusion/ej2-react-popups';
import { ListViewComponent, SelectEventArgs, Virtualization } from '@syncfusion/ej2-react-lists';
import { NumericTextBoxComponent, ColorPickerComponent, ColorPickerEventArgs } from '@syncfusion/ej2-react-inputs';
import { TimePickerComponent, DatePickerComponent, DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import { FloatLabelType } from '@syncfusion/ej2-inputs';
import { TextBoxComponent } from "@syncfusion/ej2-react-inputs";
import { DataManager, ReturnOption, Query } from '@syncfusion/ej2-data';
import { setCulture, selectAll, Internationalization, L10n, loadCldr, addClass, closest, remove, isNullOrUndefined, removeClass, formatUnit } from '@syncfusion/ej2-base';
import { ColumnDirective, ColumnsDirective, Toolbar as GridToolbar, Inject as GridInject, GridComponent, Edit, Selection, Sort, CommandColumn } from "@syncfusion/ej2-react-grids";
import { createRoot, Root } from 'react-dom/client';
import * as dataSource from './datasource';
import { JSX } from "react";
import { Locale } from './locale';
import * as numberingSystems from './cldr-data/supplemental/numberingSystems.json';
import * as currencyData from './cldr-data/supplemental/currencyData.json';
import * as deCultureData from './cldr-data/main/de/all.json';
import * as arCultureData from './cldr-data/main/ar/all.json';
import * as swissCultureDate from './cldr-data/main/fr-CH/all.json';
import * as enCultureData from './cldr-data/main/en/all.json';
import * as chinaCultureData from './cldr-data/main/zh/all.json';
import * as arIslamic from './cldr-data/main/ar/ca-islamic.json';
import * as enIslamic from './cldr-data/main/en/ca-islamic.json';
import * as deIslamic from './cldr-data/main/de/ca-islamic.json';
import * as frIslamic from './cldr-data/main/fr-CH/ca-islamic.json';
import * as zhIslamic from './cldr-data/main/zh/ca-islamic.json';

import BirthdayCelebrationMonth from '../../assets/images/birthday-celebration-month.svg';
import HouseWarmingMonth from '../../assets/images/housewarming-month.svg';
import LeadershipDevelopmentMonth from '../../assets/images/leadership-development-month.svg';
import YogaMonth from '../../assets/images/yoga-month.svg';
import GroupMeetingMonth from '../../assets/images/group-meeting-month.svg';
import NewCarCeremonyMonth from '../../assets/images/newcar-ceremony-month.svg';
import ServiceMaintenanceMonth from '../../assets/images/service-maintenance-month.svg';
import VacationMonth from '../../assets/images/vaccation-month.svg';
import WeekendCelebrationMonth from '../../assets/images/weekend-celebration-month.svg';
import MedicalCheckupMonth from '../../assets/images/medical-checkup-month.svg';
import FitnessMonth from '../../assets/images/fitness-month.svg';
import BabyShowerMonth from '../../assets/images/baby-shower-month.svg';
import WeddingMonth from '../../assets/images/wedding-month.svg';
import CharityMonth from '../../assets/images/charity-month.svg';
import OneToOneMeetingMonth from '../../assets/images/one-to-one-meeting-month.svg';
import BusinessMeetingMonth from '../../assets/images/business-meeting-month.svg';
import CybersecurityMonth from '../../assets/images/cybersecuirity-month.svg';
import ProductInnovationMonth from '../../assets/images/product-innovation-month.svg';
import CustomerRelationsMonth from '../../assets/images/customer-relations-month.svg';
import PerformanceMonth from '../../assets/images/performance-month.svg';

import LabourDayMonth from '../../assets/images/labour-day-month.svg';
import HalloweenMonth from '../../assets/images/halloween-month.svg';
import IndependenceDayMonth from '../../assets/images/independence-day-month.svg';
import PresidentsDayMonth from '../../assets/images/presidents-day-month.svg';
import EidAlFitrMonth from '../../assets/images/eid-al-fitr-month.svg';
import GoodFridayMonth from '../../assets/images/good-friday-month.svg';
import ThanksGivingMonth from '../../assets/images/thanks-giving-month.svg';
import NewYearMonth from '../../assets/images/new-year-month.svg';
import ChristmasMonth from '../../assets/images/christmas-month.svg';
import EasterDayMonth from '../../assets/images/easter-day-month.svg';
import MemorialDayMonth from '../../assets/images/memorial-day-month.svg';
import MartinLutherKingDayMonth from '../../assets/images/martin-luther-king-day-month.svg';

import BirthdayCelebrationDay from '../../assets/images/birthday-celebration-day.svg';
import BabyShowerDay from '../../assets/images/baby-shower-day.svg';
import WeddingDay from '../../assets/images/wedding-day.svg';
import HousewarmingDay from '../../assets/images/housewarming-day.svg';
import NewCarCeremonyDay from '../../assets/images/newcar-ceremony-day.svg';
import MedicalCheckupDay from '../../assets/images/medical-checkup-day.svg';
import FitnessDay from '../../assets/images/fitness-day.svg';
import YogaDay from '../../assets/images/yoga-day.svg';
import VacationDay from '../../assets/images/vaccation-day.svg';
import WeekendCelebrationDay from '../../assets/images/weekend-celebration-day.svg';
import ServiceMaintenanceDay from '../../assets/images/service-maintenance-day.svg';
import CharityDay from '../../assets/images/charity-day.svg';
import OneToOneMeetingDay from '../../assets/images/one-to-one-meeting-day.svg';
import GroupMeetingDay from '../../assets/images/group-meeting-day.svg';
import BusinessMeetingDay from '../../assets/images/business-meeting-day.svg';
import CybersecurityDay from '../../assets/images/cybersecuirity-day.svg';
import ProductInnovationDay from '../../assets/images/product-innovation-day.svg';
import CustomerRelationsDay from '../../assets/images/customer-relations-day.svg';
import LeadershipDevelopmentDay from '../../assets/images/leadership-development-day.svg';
import PerformanceDay from '../../assets/images/performance-day.svg';

import France from '../../assets/images/France-16.jpg';
import UAE from '../../assets/images/UAE-16.jpg';
import China from '../../assets/images/China-16.jpg';
import { Calendar, Islamic } from '@syncfusion/ej2-calendars';
import { on } from 'events';

loadCldr(numberingSystems, chinaCultureData, enCultureData, swissCultureDate, currencyData, deCultureData, arCultureData, arIslamic, enIslamic, deIslamic, frIslamic, zhIslamic);
L10n.load(Locale.getLocaleObj());
Calendar.Inject(Islamic);

export const App = () => {
  /* Reference Object */
  let dialogObj = useRef<DialogComponent>(null);
  let searchDialogObj = useRef<DialogComponent>(null);
  let sidebarObj = useRef<SidebarComponent>(null);
  let listViewObj = useRef<ListViewComponent>(null);
  let scheduleObj = useRef<ScheduleComponent>(null);
  let newEventObj = useRef<ButtonComponent>(null);
  let treeObj = useRef<TreeViewComponent>(null);
  let calendarTypeObj = useRef<DropDownListComponent>(null);
  let categoryTypeObj = useRef<MultiSelectComponent>(null);
  let categoryMultiSelectRef = useRef<MultiSelectComponent>(null);
  let eventSearchGridInstance = useRef<GridComponent>(null);
  let calendarSidebarObj = useRef<SidebarComponent>(null);
  let gridElement = useRef<HTMLDivElement>(null);
  let titleObj = useRef<TextBoxComponent>(null);
  let descriptionObj = useRef<TextBoxComponent>(null);
  let contextMenuObj = useRef<ContextMenuComponent>(null);
  // Color Picket Reference
  let tooltipRef = useRef<TooltipComponent>(null);
  let selectedResourceIdRef = useRef<number | null>(null);
  let selectedColorRef = useRef<string>('');
  let colorPickerRef = useRef<ColorPickerComponent>(null);
  let selectedHeaderTextRef = useRef<string>('');
  let activeCircleRef = useRef<HTMLElement | null>(null);

  let selectedItemRef = useRef<{ text: string; id: string } | null>(null);
  let intl: Internationalization = new Internationalization();
  let root: Root | null = null; // Explicitly define the type
  let isTreeItemDropped: boolean = false;
  let draggedItemId: string = '';
  let selectedTarget: Element;
  let isDateHeaderClicked: boolean;
  let isDateNavigationClicked: boolean;

  let menuRef!: MenuComponent;
  let menuMobileRef!: MenuComponent;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  let isResized: boolean = false;
  let isDesktop: boolean = true;
  let isMenuDesktopOpened: boolean = false;
  let isMenuMobileOpened: boolean = false;
  let menuAppBarFields = { text: ['category', 'value'], children: ['options'] };

  const instance: Internationalization = new Internationalization();
  const [searchEventData, setSearchEventData] = useState<Object[]>([]);
  const headerRowsConfigRef = useRef<HeaderRowsModel[]>([
    { option: 'Year' },
    { option: 'Month' },
    { option: 'Week' },
    { option: 'Date' },
    { option: 'Hour' }
  ]);
  const currentViewRef = useRef<View>('Month');
  const viewDropdownRef = useRef<DropDownListComponent>(null);
  const workStartTimePickerRef = useRef<TimePickerComponent>(null);
  const workEndTimePickerRef = useRef<TimePickerComponent>(null);
  const checkboxRefs = useRef<Record<string, CheckBoxComponent>>({});
  const dropdownRefs = useRef<Record<string, DropDownListComponent>>({});
  const multiselectRefs = useRef<Record<string, MultiSelectComponent>>({});
  const timepickerRefs = useRef<Record<string, TimePickerComponent>>({});
  const searchContainerRef = useRef<HTMLDivElement>(null);
  // Add a ref to store the search text
  const searchTextRef = useRef('');
  const toolbarSearchInputRef = useRef<HTMLInputElement>(null);

  const storedQuickInfoOnSelectionEndState = useRef(false);
  const storedIgnoreWhitespaceState = useRef(false);
  const storedShowMoreIndicatorState = useRef(false);
  const storedEnableMaxHeightState = useRef(false);
  const storedMultiRowSelectionState = useRef(false);
  const storedDragAndDropState = useRef(false);
  const storedMultiDragState = useRef(false);
  const storedRecurrenceValidationState = useRef(false);
  const storedEditFollowingEventsState = useRef(false);
  const storedQuickInfoTemplateState = useRef(false);
  const storedTooltipTemplateState = useRef(false);
  const storedEnableGroupingState = useRef(false);
  const storedResizingState = useRef(false);
  const storedInlineEditingState = useRef(false);
  const storedAllowAddingState = useRef(true);
  const localization = useRef<string | undefined>('en-US');
  const theme = useRef<string | null>('material3');
  const displayMode = useRef('Mouse');
  const dropdownFieldsMapping: { [key: string]: string } = { text: 'text', value: 'value' };
  const datetimeFieldsMapping: { [key: string]: string } = { value: 'value' };
  const resourceFieldsMapping: { [key: string]: string } = { text: 'CalendarText', value: 'CalendarId' };
  const dayStartHour: string = intl.formatDate(new Date(new Date().setHours(0, 0, 0)), { skeleton: 'Hm' });
  const dayEndtHour: string = intl.formatDate(new Date(new Date().setHours(23, 59, 59)), { skeleton: 'Hm' });
  const workStartHour: string = intl.formatDate(new Date(new Date().setHours(9, 0, 0)), { skeleton: 'Hm' });
  const workEndtHour: string = intl.formatDate(new Date(new Date().setHours(18, 0, 0)), { skeleton: 'Hm' });
  const defaultScrollTo: string = intl.formatDate(new Date(new Date().setHours(9, 0, 0)), { skeleton: 'Hm' });
  const minDate: Date | undefined = undefined;
  const maxDate: Date | undefined = undefined;
  const displayDate: Date = new Date();
  const dayViewIntervalRef = useRef<number>(1);
  const initialCategories = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
  const selectedCategories = useRef<number[]>([]);
  // Store resource-specific settings
  const resourceSettingsRef = useRef<{
    [resourceId: number]: {
      workDays?: number[];
      workHours?: {
        start: Date;
        end: Date;
      }
    }
  }>({});

  const calendarColorsRef = useRef<{ [key: string]: string }>({
    'My Calendar': '#9204EA',
    'Company': '#0064D7',
    'Birthday': '#EC4099',
    'Holiday': '#00992F'
  });

  /* Properties */
  const [showDialog, setShowDialog] = useState(false);
  const [showSearchDialog, setShowSearchDialog] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState('Scheduler Settings');
  const animationSettings: AnimationSettingsModel = { effect: "None" };
  const searchGridSelectionSettings: any = { mode: "Row", type: "Multiple" };
  const searchGridToolbarOptions: any = ["Search"];
  const showCustomiedToolbar: boolean = true;
  const defaultScrollToResource: number = 1;
  const defaultResourceColorField: string = 'Calendars';
  const defaultSpannedEventPlacement: string = 'AllDayRow';
  const defaultTimeFormat: string = 'hh:mm a';
  const defaultFirstDayOfWeek: number = 0;
  const defaultAgendaDaysCount: number = 7;
  const defaultFirstMonthOfYear: number = 0;
  const defaultMonthsCountYear: number = 12;
  const defaultWeekRule: string = 'FirstDay';
  const storedWeekRuleState = useRef<string>(defaultWeekRule);
  const defaultTimezone: string = 'Etc/GMT';
  const scheduleDate: Date = new Date(2025, 2, 10);
  const dragAndDrop: boolean = true;
  const calendarMode: CalendarType = 'Gregorian';
  const workDaysView: number[] = [1, 2, 3, 4, 5];

  const fields = {
    startTime: { name: 'StartTime', validation: { required: true } },
    endTime: { name: 'EndTime', validation: { required: true } },
  };

  const [stepIndex, setStepIndex] = useState(-1);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const modeData: Record<string, any>[] = [
    { text: 'Mouse', value: 'Mouse' },
    { text: 'Touch', value: 'Touch' },
  ];

  const exportItems: ItemModel[] = [
    { text: 'iCalendar', iconCss: 'e-icons e-export' },
    { text: 'Excel', iconCss: 'e-icons e-export-excel' }
  ];

  const scheduleParentProperties = [
    { text: 'Scheduler Settings', id: 'list-01' },
    { text: 'Calendar Settings', id: 'list-02' },
    { text: 'Timescale Settings', id: 'list-03' },
    { text: 'Event Settings', id: 'list-04' },
    { text: 'Resource Settings', id: 'list-05' },
    { text: 'Template Settings', id: 'list-06' },
    { text: 'Web Standards', id: 'list-07' },
  ];

  const calendarModeOptions: Record<string, any>[] = [
    { text: 'Gregorian', value: 'Gregorian' },
    { text: 'Islamic', value: 'Islamic' },
  ];

  const weekDays: Record<string, any>[] = [
    { text: 'Sunday', value: 0 },
    { text: 'Monday', value: 1 },
    { text: 'Tuesday', value: 2 },
    { text: 'Wednesday', value: 3 },
    { text: 'Thursday', value: 4 },
    { text: 'Friday', value: 5 },
    { text: 'Saturday', value: 6 }
  ];

  const originalWeekDaysRef = useRef<Record<string, any>[]>([...weekDays]);
  const currentWeekDaysRef = useRef<Record<string, any>[]>([...weekDays]);
  const timescaleStoredStatesRef = useRef<{ [key: string]: any }>({});

  const majorSlotData: Record<string, any>[] = [
    { text: '1 hour', value: 60 },
    { text: '1.5 hours', value: 90 },
    { text: '2 hours', value: 120 },
    { text: '2.5 hours', value: 150 },
    { text: '3 hours', value: 180 },
    { text: '3.5 hours', value: 210 },
    { text: '4 hours', value: 240 },
    { text: '4.5 hours', value: 270 },
    { text: '5 hours', value: 300 },
    { text: '5.5 hours', value: 330 },
    { text: '6 hours', value: 360 },
    { text: '6.5 hours', value: 390 },
    { text: '7 hours', value: 420 },
    { text: '7.5 hours', value: 450 },
    { text: '8 hours', value: 480 },
    { text: '8.5 hours', value: 510 },
    { text: '9 hours', value: 540 },
    { text: '9.5 hours', value: 570 },
    { text: '10 hours', value: 600 },
    { text: '10.5 hours', value: 630 },
    { text: '11 hours', value: 660 },
    { text: '11.5 hours', value: 690 },
    { text: '12 hours', value: 720 }
  ];

  const minorSlotData: number[] = [1, 2, 3, 4, 5, 6, 7];

  const calendarCollections: Record<string, any>[] = [
    { CalendarText: 'My Calendar', CalendarId: 1, CalendarColor: '#9204EA', IsExpand: true },
    { CalendarText: 'Company', CalendarId: 2, CalendarColor: '#0064D7', IsExpand: true },
    { CalendarText: 'Birthday', CalendarId: 3, CalendarColor: '#EC4099', IsExpand: true }
  ];

  const categoriesData: Record<string, any>[] = [
    { CategoryText: 'Family Events', Id: 1, GroupId: 1, CategoryColor: '#df5286' },
    { CategoryText: 'Personal Milestones & Health', Id: 2, GroupId: 1, CategoryColor: '#7fa900' },
    { CategoryText: 'Social Gatherings & Reunions', Id: 3, GroupId: 1, CategoryColor: '#ea7a57' },
    { CategoryText: 'Appointments & Maintenance', Id: 4, GroupId: 1, CategoryColor: '#5978ee' },
    { CategoryText: 'Special Celebrations & Remembrances', Id: 5, GroupId: 1, CategoryColor: '#710193' },

    { CategoryText: 'Team & Project Management', Id: 6, GroupId: 2, CategoryColor: '#00bdae' },
    { CategoryText: 'Business & Strategy', Id: 7, GroupId: 2, CategoryColor: '#ff8787' },
    { CategoryText: 'Performance & HR', Id: 8, GroupId: 2, CategoryColor: '#9775fa' },
    { CategoryText: 'Leadership & Development', Id: 9, GroupId: 2, CategoryColor: '#748ffc' },
    { CategoryText: 'Sales & Customer Relations', Id: 10, GroupId: 2, CategoryColor: '#3bc9db' },
    { CategoryText: 'Product & Innovation', Id: 11, GroupId: 2, CategoryColor: '#69db7c' },
    { CategoryText: 'Security & Compliance', Id: 12, GroupId: 2, CategoryColor: '#fdd835' },
    { CategoryText: 'Company Culture & Engagement', Id: 13, GroupId: 2, CategoryColor: '#ffb74d' },

    { CategoryText: 'Immediate Family', Id: 14, GroupId: 3, CategoryColor: '#bbdc00' },
    { CategoryText: 'Extended Family', Id: 15, GroupId: 3, CategoryColor: '#9e5fff' },
    { CategoryText: 'Friends & Close Circle', Id: 16, GroupId: 3, CategoryColor: '#1aaa55' },
    { CategoryText: 'Famous Personalities', Id: 17, GroupId: 3, CategoryColor: '#865fcf' }
  ]

  const resourceColorFieldOptions: Record<string, any>[] = [
    { text: 'Calendars', value: 'Calendars' },
    { text: 'Categories', value: 'Categories' },
  ];

  const spannedEventPlacementOptions: Record<string, any>[] = [
    { text: 'All Day Row', value: 'AllDayRow' },
    { text: 'Time Slot', value: 'TimeSlot' },
  ];

  const timeFormatData: Record<string, any>[] = [
    { text: "12 hours", value: "hh:mm a" },
    { text: "24 hours", value: "HH:mm" }
  ];

  const dateTimeDataTypes: { [key: string]: Object }[] = [
    { value: 'M/d/yy' },
    { value: 'dd-MMM-yy' }
  ];

  const months: Record<string, any>[] = [
    { text: 'January', value: 0 },
    { text: 'February', value: 1 },
    { text: 'March', value: 2 },
    { text: 'April', value: 3 },
    { text: 'May', value: 4 },
    { text: 'June', value: 5 },
    { text: 'July', value: 6 },
    { text: 'August', value: 7 },
    { text: 'September', value: 8 },
    { text: 'October', value: 9 },
    { text: 'November', value: 10 },
    { text: 'December', value: 11 }
  ];

  const weekNumberData: Record<string, any>[] = [
    { text: 'First Day of Year', value: 'FirstDay' },
    { text: 'First Full Week', value: 'FirstFullWeek' },
    { text: 'First Four-Day Week', value: 'FirstFourDayWeek' }
  ];

  const timezoneData: Record<string, any>[] = [
    { text: 'UTC -12:00', value: 'Etc/GMT+12' },
    { text: 'UTC -11:00', value: 'Etc/GMT+11' },
    { text: 'UTC -10:00', value: 'Etc/GMT+10' },
    { text: 'UTC -09:00', value: 'Etc/GMT+9' },
    { text: 'UTC -08:00', value: 'Etc/GMT+8' },
    { text: 'UTC -07:00', value: 'Etc/GMT+7' },
    { text: 'UTC -06:00', value: 'Etc/GMT+6' },
    { text: 'UTC -05:00', value: 'Etc/GMT+5' },
    { text: 'UTC -04:00', value: 'Etc/GMT+4' },
    { text: 'UTC -03:00', value: 'Etc/GMT+3' },
    { text: 'UTC -02:00', value: 'Etc/GMT+2' },
    { text: 'UTC -01:00', value: 'Etc/GMT+1' },
    { text: 'UTC +00:00', value: 'Etc/GMT' },
    { text: 'UTC +01:00', value: 'Etc/GMT-1' },
    { text: 'UTC +02:00', value: 'Etc/GMT-2' },
    { text: 'UTC +03:00', value: 'Etc/GMT-3' },
    { text: 'UTC +04:00', value: 'Etc/GMT-4' },
    { text: 'UTC +05:00', value: 'Etc/GMT-5' },
    { text: 'UTC +05:30', value: 'Asia/Calcutta' },
    { text: 'UTC +06:00', value: 'Etc/GMT-6' },
    { text: 'UTC +07:00', value: 'Etc/GMT-7' },
    { text: 'UTC +08:00', value: 'Etc/GMT-8' },
    { text: 'UTC +09:00', value: 'Etc/GMT-9' },
    { text: 'UTC +10:00', value: 'Etc/GMT-10' },
    { text: 'UTC +11:00', value: 'Etc/GMT-11' },
    { text: 'UTC +12:00', value: 'Etc/GMT-12' },
    { text: 'UTC +13:00', value: 'Etc/GMT-13' },
    { text: 'UTC +14:00', value: 'Etc/GMT-14' }
  ];

  const localizationData: { text: string; value: string; image: string }[] = [
    { text: 'English', value: 'en-US', image: 'https://ej2.syncfusion.com/javascript/demos/src/tree-grid/images/USA.png' },
    { text: 'Germany', value: 'de', image: 'https://ej2.syncfusion.com/javascript/demos/src/tree-grid/images/Germany.png' },
    { text: 'French', value: 'fr-CH', image: France },
    { text: 'Arabic', value: 'ar', image: UAE },
    { text: 'Chinese', value: 'zh', image: China }
  ];

  const themeData: Record<string, any>[] = [
    { text: 'Material3', value: 'material3' },
    { text: 'Material3 Dark', value: 'material3-dark' },
    { text: 'Fluent', value: 'fluent' },
    { text: 'Fluent Dark', value: 'fluent-dark' }
  ];

  const viewOptions: Record<string, any>[] = [
    { text: 'Week', value: 'Week' },
    { text: 'Day', value: 'Day' },
    { text: 'Work Week', value: 'WorkWeek' },
    { text: 'Month', value: 'Month' },
    { text: 'Year', value: 'Year' },
    { text: 'Agenda', value: 'Agenda' },
    { text: 'MonthAgenda', value: 'MonthAgenda' },
    { text: 'Timeline Day', value: 'TimelineDay' },
    { text: 'Timeline Week', value: 'TimelineWeek' },
    { text: 'Timeline Work Week', value: 'TimelineWorkWeek' },
    { text: 'Timeline Month', value: 'TimelineMonth' },
    { text: 'Horizontal TimelineYear', value: 'Horizontal TimelineYear' },
    { text: 'Vertical TimelineYear', value: 'Vertical TimelineYear' }
  ];

  const contextMenuItems: MenuItemModel[] = [
    { text: 'New Event', iconCss: 'e-icons e-plus', id: 'Add' },
    { text: 'New Recurring Event', iconCss: 'e-icons e-repeat', id: 'AddRecurrence' },
    { text: 'Today', iconCss: 'e-icons e-timeline-today', id: 'Today' },
    { text: 'Edit Event', iconCss: 'e-icons e-edit', id: 'Save' },
    { text: 'Delete Event', iconCss: 'e-icons e-trash', id: 'Delete' },
    {
      text: 'Delete Recurrence Event', id: 'DeleteRecurrenceEvent', iconCss: 'e-icons e-trash',
      items: [
        { text: 'Delete Occurrence', id: 'DeleteOccurrence' },
        { text: 'Delete Series', id: 'DeleteSeries' }
      ]
    },
    {
      text: 'Edit Recurrence Event', id: 'EditRecurrenceEvent', iconCss: 'e-icons e-edit',
      items: [
        { text: 'Edit Occurrence', id: 'EditOccurrence' },
        { text: 'Edit Series', id: 'EditSeries' }
      ]
    }
  ];

  const steps = [
    {
      selector: '#overview_toolbar_settings',
      arrowPosition: 'top-right',
      content:
        (
          <div>
            <strong>Schedule Customizer Hub</strong> <br /> <br />
            Configure scheduler settings including calendar, timescale, events, resources, and templates.
          </div>
        )
    },
    {
      selector: '.search-container',
      arrowPosition: 'top-left-center',
      content: (
        <div>
          <strong>Rapid & Customizable Search</strong><br /><br />
          Search for events by title or description to quickly find what you need.
        </div>
      )
    },
    {
      selector: '.accordion-color-indicator',
      arrowPosition: 'top-left',
      content:
        (
          <div>
            <strong>Dynamic Calendar Event Coloring by Resource </strong><br /><br />
            Customize the calendar event color dynamically based on the selected resource color.
          </div>
        ),
    },
    {
      selector: '#Unplanned\\ Events',
      arrowPosition: 'left-center',
      content: (
        <div>
          <strong>Quick Scheduling with Drag-and-Drop</strong><br /> <br />
          Drag unplanned events from the sidebar and drop them onto the calendar to schedule.
        </div>
      ),
    },
    {
      selector: '#new-event',
      arrowPosition: 'top-left',
      content: (
        <div>
          <strong>Add Events Easily</strong><br /> <br />
          Click the "New Event" button or tap directly on a calendar slot to create a new event.
        </div>
      ),
    },
    {
      selector: '.view-dropdown-container',
      arrowPosition: 'top-left-center',
      content: (
        <div>
          <strong>Flexible Calendar Views </strong><br /> <br />
          Easily switch between Day, Week, Month, and Timeline views to suit your scheduling needs.
        </div>
      ),
    },
    {
      selector: '.calendar-export',
      arrowPosition: 'top-right-center',
      content: (
        <div>
          <strong>Export Calendar Data </strong><br /> <br />
          Download your calendar events in Excel or iCalendar format for external use or backup.
        </div>
      ),
    }
  ];

  // Add special handling for the search step
  const handleSearchStepNavigation = (stepIndex: number) => {
    // Check if current step is the search step (index 1 based on your image)
    if (stepIndex === 1) { // Adjust index as needed
      const step = steps[stepIndex];
      const element = document.querySelector(step.selector) as HTMLElement;
      if (!element) return;
      const searchContainer = document.querySelector('.search-container');
      if (searchContainer) {
        if (window.innerWidth <= 768) {
          // If search is in a toolbar that might be scrolled horizontally
          const toolbar = searchContainer.closest('.e-toolbar');
          if (toolbar) {
            const hScrollBar = toolbar.querySelector('.e-hscroll-bar');
            if (hScrollBar) {
              // Calculate position to make search visible
              const searchLeft = searchContainer.getBoundingClientRect().left;
              const toolbarLeft = toolbar.getBoundingClientRect().left;
              const scrollLeft = searchLeft - toolbarLeft - 20; // 20px buffer

              hScrollBar.scrollTo({
                left: scrollLeft,
                behavior: 'smooth'
              });
            }
          }
        } else {
          // For desktop, element.scrollIntoView works well
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          });
        }

      }
    }
  };

  // Add special handling for the view step
  const handleViewStepNavigation = (stepIndex: number) => {
    // Check if current step is the view dropdown step
    if (stepIndex === 6) { // Adjust index as needed
      const step = steps[stepIndex];
      const element = document.querySelector(step.selector) as HTMLElement;
      if (!element) return;
      const viewContainer = document.querySelector('.view-dropdown-container');
      if (viewContainer) {
        if (window.innerWidth <= 768) {
          // If view dropdown is in a toolbar that might be scrolled horizontally
          const toolbar = viewContainer.closest('.e-toolbar');
          if (toolbar) {
            const hScrollBar = toolbar.querySelector('.e-hscroll-bar');
            if (hScrollBar) {
              // Calculate position to make view dropdown visible
              const viewLeft = viewContainer.getBoundingClientRect().left;
              const toolbarLeft = toolbar.getBoundingClientRect().left;
              const scrollLeft = viewLeft - toolbarLeft + 140; // 140px buffer
              hScrollBar.scrollLeft = scrollLeft;
            }
          }
        } else {
          // For desktop, element.scrollIntoView works well
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          });
        }

      }
    }
  };

  // Add this function to check if we should skip a step based on screen size
  const shouldSkipStep = (stepIndex: number) => {
    // If screen is small (320px-480px)
    if (window.innerWidth >= 320 && window.innerWidth <= 480) {
      // Check if current step targets hidden elements
      const step = steps[stepIndex];
      if (step && step.selector === '.accordion-color-indicator') {
        return true; // Skip this step
      }
    }
    return false;
  };

  useEffect(() => {
    const scheduleContent = document.querySelector('.e-content-wrap');
    if (!scheduleContent) return;

    const handleInteraction = (e: Event | MouseEvent) => {
      // Only close if click is outside tooltip
      const tooltip = document.querySelector('.walkthrough-tooltip');
      if (tooltip && !tooltip.contains(e.target as Node)) {
        removeWalkthrough(e);
      }
    };

    scheduleContent.addEventListener('mousedown', handleInteraction);
    scheduleContent.addEventListener('scroll', handleInteraction);

    return () => {
      scheduleContent.removeEventListener('mousedown', handleInteraction);
      scheduleContent.removeEventListener('scroll', handleInteraction);
    };
  }, []);

  const prevPositionRef = useRef({ top: 0, left: 0 });

  // Effect to handle step change: scroll container and highlight
  useEffect(() => {
    if (stepIndex < 0 || stepIndex >= steps.length) return;

    const step = steps[stepIndex];
    const element = document.querySelector(step.selector) as HTMLElement;
    if (!element) return;

    // Remove old highlight
    document.querySelectorAll('.walkthrough-highlight').forEach(el => {
      el.classList.remove('walkthrough-highlight');
      // Also remove any inline styles that might have been added
      (el as HTMLElement).style.zIndex = '';
    });

    // Add new highlight with proper z-index to ensure it's above overlay
    element.classList.add('walkthrough-highlight');
    element.style.zIndex = '1000'; // Ensure it's above the overlay

    // Scroll element into view if needed
    const isInViewport = (el: HTMLElement) => {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= window.innerHeight &&
        rect.right <= window.innerWidth
      );
    };

    if (!isInViewport(element)) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [stepIndex, steps]);

  // Effect to update tooltip position and handle scroll/resize events only once
  useEffect(() => {
    const updateTooltip = () => {
      const step = steps[stepIndex];
      if (!step) return;
      const element = document.querySelector(step.selector) as HTMLElement;
      if (!element) return;

      const tooltipWidth = 350;
      const tooltipHeight = 180;
      const padding = 15;
      const rect = element.getBoundingClientRect();

      // Calculate initial position based on arrow position
      let top, left;

      // Special handling for unplanned events tooltip
      if (window.innerWidth < 620 && step.selector === '#Unplanned\\ Events') {
        // Position tooltip above the element
        top = (rect.top - tooltipHeight + window.scrollY) + padding;
        left = 0; // Center horizontally

        // Ensure tooltip stays within viewport
        top = Math.max(window.scrollY + padding, top);
      } else {
        switch (step.arrowPosition) {
          case 'top-right':
            top = rect.bottom + padding + window.scrollY;
            left = rect.left + window.scrollX;
            break;
          case 'top-left-center':
            top = rect.bottom + padding + window.scrollY;
            left = rect.left - (tooltipWidth / 4) + window.scrollX;
            break;
          case 'left-center':
            top = rect.top + (rect.height / 2) - (tooltipHeight / 2) + window.scrollY;
            left = rect.right + padding + window.scrollX;
            break;
          default:
            top = rect.bottom + padding + window.scrollY;
            left = rect.left + window.scrollX;
        }

        // Ensure tooltip stays within viewport
        left = Math.min(Math.max(left, padding), window.innerWidth + window.scrollX - tooltipWidth - padding);
        top = Math.min(Math.max(top, window.scrollY + padding), window.innerHeight + window.scrollY - tooltipHeight - padding);
      }

      // Only update state if position changes significantly
      const prev = prevPositionRef.current;
      if (Math.abs(prev.top - top) > 1 || Math.abs(prev.left - left) > 1) {
        prevPositionRef.current = { top, left };
        setPosition({ top, left });
      }

      // Update tooltip arrow position based on screen size
      const tooltipElement = document.querySelector('.walkthrough-tooltip')?.children?.[0] as HTMLElement;
      if (tooltipElement) {
        // Define responsive classes mapping
        const responsiveClasses = {
          'walkthrough-tooltip-top-right': 'walkthrough-tooltip-top-right-smaller',
          'walkthrough-tooltip-top-left': 'walkthrough-tooltip-top-left-smaller',
          'walkthrough-tooltip-top-left-center': 'walkthrough-tooltip-top-left-center-smaller',
          'walkthrough-tooltip-left-center': 'walkthrough-tooltip-left-center-smaller'
        };

        // Apply appropriate class based on screen size
        Object.entries(responsiveClasses).forEach(([largeClass, smallClass]) => {
          if (window.innerWidth < 1024) {
            if (tooltipElement.classList.contains(largeClass)) {
              tooltipElement.classList.replace(largeClass, smallClass);
            }
            if (stepIndex === 3 && window.innerWidth < 620) {
              if (tooltipElement.classList.contains('walkthrough-tooltip-left-center-smaller')) {
                tooltipElement.classList.replace('walkthrough-tooltip-left-center-smaller', 'walkthrough-tooltip-left-center-mobile');
              }
            } else {
              if (tooltipElement.classList.contains('walkthrough-tooltip-left-center-mobile')) {
                tooltipElement.classList.replace('walkthrough-tooltip-left-center-mobile', 'walkthrough-tooltip-left-center-smaller');
              }
            }
          } else {
            if (tooltipElement.classList.contains(smallClass)) {
              tooltipElement.classList.replace(smallClass, largeClass);
            }
          }
        });
      }
    }

    // Debounced update function
    let debounceTimer: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      if (debounceTimer) clearTimeout(debounceTimer);
      const isSidebarWalkthorughHidden: boolean = document.querySelector('.walkthrough-sidebar-left-overlay')?.classList.contains('e-hidden');
      if (!isSidebarWalkthorughHidden) {
        const sibling: HTMLElement | null = document.querySelector('.sidebar-content');
        const mainElement: HTMLElement | null = document.querySelector('.sidebar-treeview');
        const elementWidth: number = mainElement ? mainElement.getBoundingClientRect().width : 0;
        if (sibling) {
          sibling.style.marginLeft = setDimension(elementWidth);
        }
      }
      debounceTimer = setTimeout(() => {
        updateTooltip();

        // Special handling for unplanned events tooltip
        if (stepIndex === 3) { // Assuming unplanned events is step index 3
          const step = steps[stepIndex];
          const element = document.querySelector(step.selector) as HTMLElement;
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }
      }, 100);
    };

    // Initial update
    updateTooltip();

    // Event handlers with passive option for better performance
    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('scroll', handleResize, { passive: true, capture: true });

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleResize, { capture: true });
      if (debounceTimer) clearTimeout(debounceTimer);
    };
  }, [stepIndex, steps]);


  const startWalkthrough = () => setStepIndex(0);
  const nextStep = () => {
    if (stepIndex < steps.length - 1) {
      // Calculate the next step index
      let nextStepIndex = stepIndex + 1;

      // Skip steps that target hidden elements on small screens
      while (shouldSkipStep(nextStepIndex) && nextStepIndex < steps.length - 1) {
        nextStepIndex++;
      }
      // Set the new step index
      setStepIndex(nextStepIndex);
      handleSearchStepNavigation(nextStepIndex);
      handleViewStepNavigation(nextStepIndex);
    } else {
      endWalkthrough();
    }
  };
  const prevStep = () => {
    if (stepIndex > 0) {
      // Calculate the previous step index
      let prevStepIndex = stepIndex - 1;

      // Skip steps that target hidden elements on small screens
      while (shouldSkipStep(prevStepIndex) && prevStepIndex > 0) {
        prevStepIndex--;
      }
      setStepIndex(prevStepIndex);
    }
  };
  const closeTooltip = () => endWalkthrough();
  const endWalkthrough = () => {
    document.querySelectorAll('.walkthrough-highlight').forEach((el) => el.classList.remove('walkthrough-highlight'));
    document.querySelector('.walkthrough-sidebar-left-overlay')?.classList.add('e-hidden');
    document.querySelector('.walkthrough-schedule-overlay')?.classList.add('e-hidden');
    document.querySelector('.schedule-overview-container')?.classList.remove('overlay');
    document.querySelector('.App')?.classList.remove('overlay');
    document.querySelector('.sidebar-treeview')?.classList.remove('overlay');
    setStepIndex(-1);
  };

  const removeWalkthrough = (e: any) => {
    const tooltip = document.querySelector('.walkthrough-tooltip');
    if (tooltip && tooltip.contains(e.target)) return;
    if (tooltip) endWalkthrough();
  };

  const propertyDescription: { [key: string]: string } = {
    // Schedule Settings
    "Enable Read Only Mode": "Prevents event modifications while still showing quick popups.",
    "Allow Event Resizing": "Allows users to resize appointments by dragging the start or end handles. Requires allowEditing=true.",
    "Show Time Indicator": "Shows a real-time indicator marking the current time on the Scheduler.",
    "Show Quick Info": "Displays a quick popup with cell or event details when clicking on a cell or event.",
    "Show Quick Info On Selection End": "Shows the quick info popup only after selecting multiple cells on selection.",

    "Show Header Row": "Adds additional header rows to display year, month, or week labels in timeline views.",
    "Enable All Day Scroll": "Enables a separate scrollbar for the all-day row when its height exceeds the maximum allowed limit.",
    "Show Date Header Template": "Customizes the date header using a template(HTML/JSX), where the date field can be accessed.",

    "Enable Row Auto Height": "Adjusts the height of work cells dynamically based on the number of overlapping appointments in each time range.",
    "Ignore Whitespace": "Removes extra whitespace at the bottom of event elements.",

    "Allow Multiple Cell Selection": "Enables selecting multiple cells simultaneously for scheduling. Works with Shift+Click or swipe.",
    "Allow Multiple Row Selection": "Enables selecting multiple days simultaneously for scheduling. Works with Shift+Click or swipe.",

    "Allow Drag and Drop": "Enables dragging and dropping of appointments to reschedule events while automatically adjusting their start and end times. Requires allowEditing=true.",
    "Allow Multiple Drag": "Allows dragging multiple selected events at the same time. Requires allowDragAndDrop=true.",
    "Enable Recurrence Validation": "Enables built-in validation for recurring appointments during creation, editing, resizing, or drag-and-drop actions.",

    "Hide Empty Agenda Days": "Controls whether to hide empty dates in Agenda view.",
    "No of Days in Agenda View": "Sets the number of days displayed in Agenda view.",

    "Clipboard": "Enables cut, copy, and paste actions for appointments using keyboard shortcuts (Ctrl + X, Ctrl + C, Ctrl + V).",
    "Allow Swiping": "Allows users to navigate between dates using swipe gestures on touch devices.",

    // Calendar Settings
    "Show Weekend": "Toggles the visibility of weekend days, based on the workDays collection.",
    "Show Week Numbers": "Displays the week number for the current date range.",
    "Set Selected Date": "Defines the initially selected date in the Scheduler. Defaults to the current system date.",
    "Set Date Format": "Configures how dates are displayed in the Schedule. (e.g., \"MMM dd, yyyy\"). Uses CLDR patterns.",
    "Set Min and Max Date": "Sets the allowable date(e.g., minDate=\"2024-01-01\") range for scheduling and navigation.",
    "Set Week Rule": "Determines how week numbers are displayed based on the chosen rule. (e.g., \"FirstDay\" or \"FirstFourDayWeek\").",
    "Set First Day Of Week": "Sets the starting day of the week(0=Sunday, 1=Monday, etc.), configurable based on locale settings.",
    "Set First Month Of Year": "Defines which month starts the Year View (default: January).",
    "Set Work Days": "Defines working days(e.g., [1,2,3,4,5] for Mon-Fri). In the WorkWeek view, only these days are shown.",
    "Set Calendar Mode": "Defines the calendar format used in the Scheduler (Gregorian, Islamic, etc.).",
    "Set Time zone": "Defines a specific timezone for displaying appointments. Defaults to the system timezone if not set.",
    "Set Months Count": "Specifies how many months are displayed in the Year View.",

    "Current View": "Sets the default active view(Day, Week, Month, etc.) of the Scheduler on initial load.",

    // Timescale Settings
    "Show Timescale": "Displays events proportionally based on their time duration. If disabled, all events are listed sequentially.",
    "Show Major Slot Template": "Customizes the appearance of major time slots(e.g., show \"14:00\" instead of \"2:00 PM\").",
    "Show Minor Slot Template": "Customizes the appearance of minor time slots.",
    "Set Time Format": "Configures how times are displayed in the Schedule. (e.g., \"MMM dd, yyyy\"). Uses CLDR patterns.",
    "Set Start Hour": "Hides all time slots before the specified start hour (e.g., \"08:00\" to \"18:00\").",
    "Set End Hour": "Hides all time slots after the specified end hour (e.g., \"08:00\" to \"18:00\").",
    "Set Work Hours": "Highlights specified work hours(e.g., { start: 9, end: 17 }) using a shaded color.",
    "Set Interval(in Hour)": "Defines the time interval for the time axis (e.g., 30 min, 1 hour).",
    "Set Slot Count": "Splits each time slot into smaller slots based on the interval(e.g., 4 for 15-minute slots).",
    "Scroll To Specified Time": "Scrolls the Scheduler to a specific time(e.g., scrollTo(\"09:00\").",

    // Event Settings
    "Occupy Full Cell Height": "Allows events to occupy all available space in timeline and vertical views.",
    "Show More Indicator": "Displays a \"more\" indicator when multiple appointments exist in a time slot.",
    "Enable Event Tooltip": "Displays a tooltip with event details when hovering over an appointment.",
    "Set Resource Color Field": "Assigns colors to events based on resource grouping.",
    "Set Spanned Event placement": "Defines whether multi-day events appear in the AllDayRow or regular timeslots.",

    "Allow Adding": "Controls whether new events can be added.",
    "Allow Deleting": "Controls whether events can be deleted.",
    "Allow Editing": "Controls whether events can be edited.",
    "Allow Edit Following Recurrence Events": "Enables editing only future occurrences of a recurring event.",
    "Allow Inline Editing": "Allows inline editing of appointments directly within the Scheduler.",

    // Resource Settings
    "Allow Grouping": "Enables grouping of appointments by resources.",
    "Allow Group Edit": "Allows linked appointments across resources to be edited together.",
    "Scroll To Resource": "Scrolls to a specified resource (not applicable for Agenda and Month Agenda views).",
    "Show Expanded Field": "Maps whether resources should be expanded or collapsed by default.",

    "Allow Multiple": "Enables selecting multiple resources, creating separate appointment instances for each selection.",

    "Resource": "Specifies which resource should follow the defined workdays and work hours.",
    "Work Day": "Maps each resource's working days from the data source.",
    "Work Hour": "Maps custom start and end hours per resource.",

    // Template Settings
    "Show Cell Template": "Customizes work cells using a template.",
    "Show Event Template": "Customizes event appearance using a template.",

    "Show Cell Header Template": "Customizes the date header in Month view.",
    "Show Day Header Template": "Customizes the Year View's day header.",
    "Show Month Header Template": "Customizes the Year View's month header.",

    "Show Header Rows Template": "Customizes header rows.",

    "Show Editor Template": "Allows full customization of the appointment editor popup using a template. Form fields must have the e-field class for proper data binding.",
    "Show Editor Header Template": "Customizes the header layout of the editor window.",
    "Show Editor Footer Template": "Customizes the footer layout of the editor window.",
    "Show Quick Info Template": "Customizes the quick info popup, including its header, content, and footer.",

    "Show Event Tooltip Template": "Customizes tooltip content.",

    "Show Resource Header Template": "Customizes resource header cells using a template(HTML/JSX).",

    // Web Standards
    "Enable RTL": "RTL (Right-to-Left) refers to the text direction used in languages like Arabic and Hebrew, where text is read and written starting from the right side of the page.",
    "Set Localization": "Localization is the process of adapting software, content, or applications to a specific region, language, or culture by translating text, formatting data, and modifying UI elements to align with local preferences.",
    "Set Themes": "A theme is a predefined set of visual styles, including colors, fonts, and layout, that determines the look and feel of an application or website. It helps create a consistent design across the entire interface.",
    "Set Interaction Types": "Interaction types are the various ways users engage with a system, such as clicking, typing, or touching.",

    // Header Settings
    "Header Bar": "Controls the visibility of the header bar containing navigation and view options.",
    "Header Indent": "Customizes the header indent area using a template(HTML/JSX).",

    // Group Settings
    "By Date": "Displays resources grouped under each date.",
    "Enable Compact View": "Controls how resources are grouped in mobile view. If disabled, scrolling is enabled.",
    "Hide Non-Working Days": "Hides non-working days in grouped views like Day, Week, WorkWeek, and Month."
  };

  // Parse "HH:mm" string to Date object
  const parseTime = (timeStr: string): Date => {
    const date = new Date();
    const [hours, minutes] = timeStr.split(":").map(Number);
    date.setHours(hours, minutes, 0, 0);
    return date;
  };

  // Format Date object to "HH:mm" string
  const formatTime = (date: Date): string => {
    return `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
  };

  // Helper function to disable a checkbox by adding e-disabled class to wrapper
  const disableCheckbox = (id: string) => {
    if (checkboxRefs.current[id]) {
      const wrapper = checkboxRefs.current[id].element.closest('.e-checkbox-wrapper');
      if (wrapper) {
        wrapper.classList.add('e-checkbox-disabled');
        wrapper.setAttribute("disabled", "true");
      }
    }
  };

  // Helper function to enable a checkbox by removing e-disabled class from wrapper
  const enableCheckbox = (id: string) => {
    if (checkboxRefs.current[id]) {
      const wrapper = checkboxRefs.current[id].element.closest('.e-checkbox-wrapper');
      if (wrapper) {
        wrapper.classList.remove('e-checkbox-disabled');
        wrapper.removeAttribute("disabled");
      }
    }
  };

  // Updated function to determine if resizing and drag/drop should be disabled
  const shouldDisableResizingAndDragDrop = (values: Record<string, boolean>) => {
    // Only disable when eventtemplate is true AND we're in Month view
    return values['eventtemplate'] && currentViewRef.current === 'Month';
  };

  // Function to check if we should enable resizing and drag/drop
  const shouldEnableResizingAndDragDrop = () => {
    // Enable when any of these conditions are true
    return checkboxStates['headerrow'] ||
      checkboxStates['headerrowstemplate'] ||
      checkboxStates['enablegrouping'] ||
      currentViewRef.current !== 'Month';
  };

  const checkboxCreated = (id: string, checkboxReference: Record<string, CheckBoxComponent>) => {

    // For celltemplate checkbox - disable allowadding if initially checked
    if (id === 'celltemplate') {
      if (checkboxReference[id] && checkboxStates[id]) {
        storedAllowAddingState.current = checkboxStates['allowadding'] || false;
        disableCheckbox('allowadding');
      }
    }

    // For allowadding checkbox - set initial disabled state based on celltemplate
    if (id === 'allowadding') {
      if (checkboxReference[id]) {
        const isCellTemplateEnabled = checkboxStates['celltemplate'] || false;
        if (isCellTemplateEnabled) {
          storedAllowAddingState.current = checkboxStates['allowadding'] || false;
          disableCheckbox(id);
        }
      }
    }

    // For allowinlineedting checkbox - disable if templates are enabled
    if (id === 'allowinlineedting') {
      if (checkboxReference[id]) {
        const isTemplateEnabled = checkboxStates['celltemplate'] || checkboxStates['eventtemplate'];
        if (isTemplateEnabled) {
          disableCheckbox(id);
        }
      }
    }

    // If this is a template checkbox and it's initially checked, disable inline editing
    if ((id === 'celltemplate' || id === 'eventtemplate') && checkboxStates[id]) {
      disableCheckbox('allowinlineedting');
    }

    // If this is the resizing or draganddrop checkbox, set its initial disabled state
    if (id === 'resizing' || id === 'draganddrop') {
      if (checkboxReference[id]) {
        // Check if we should disable these checkboxes initially
        const isEventTemplateEnabled = checkboxStates['eventtemplate'] || false;
        const isCurrentViewMonth = currentViewRef.current === 'Month';

        // Disable if eventtemplate is enabled and current view is Month
        if (isEventTemplateEnabled && isCurrentViewMonth) {
          disableCheckbox(id);

          // Store the initial state
          if (id === 'resizing') {
            storedResizingState.current = checkboxStates['resizing'] || false;
          } else if (id === 'draganddrop') {
            storedDragAndDropState.current = checkboxStates['draganddrop'] || false;
          }
        }
      }
    }

    // If this is the allowgroupedit checkbox, set its initial disabled state
    if (id === 'allowgroupedit' || id === 'resourceheader') {
      if (checkboxReference[id]) {
        const isEnableGroupingChecked = (checkboxStates['enablegrouping'] || false) && !(checkboxStates['eventtemplate'] || checkboxStates['celltemplate'] || checkboxStates['headerrow'] || checkboxStates['headerrowstemplate']);
        if (!isEnableGroupingChecked) {
          disableCheckbox(id);
        }
      }
    }

    // Set initial disabled state for quickinfoonselectionend based on quickinfo state
    if (id === 'quickinfoonselectionend') {
      if (checkboxReference[id]) {
        const isQuickInfoEnabled = checkboxStates['quickinfo'] || false;

        // If it's initially disabled, store its state
        if (!isQuickInfoEnabled) {
          disableCheckbox(id);
          storedQuickInfoOnSelectionEndState.current = checkboxStates['quickinfoonselectionend'] || false;
        }
      }
    }

    // Set initial disabled state for ignorewhitespace based on rowautoheight state
    if (id === 'ignorewhitespace') {
      if (checkboxReference[id]) {
        const isRowAutoHeightEnabled = checkboxStates['rowautoheight'] || false;

        // If it's initially disabled, store its state
        if (!isRowAutoHeightEnabled) {
          disableCheckbox(id);
          storedIgnoreWhitespaceState.current = checkboxStates['ignorewhitespace'] || false;
        }
      }
    }

    // Set initial disabled state for enableindicator and enablemaxheight based on rowautoheight state
    if (id === 'enableindicator' || id === 'enablemaxheight') {
      if (checkboxReference[id]) {
        const isRowAutoHeightEnabled = checkboxStates['rowautoheight'] || false;

        // If it's initially disabled, store its state
        if (isRowAutoHeightEnabled) {
          disableCheckbox(id);
          if (id === 'enableindicator') {
            storedShowMoreIndicatorState.current = checkboxStates['enableindicator'] || false;
          } else if (id === 'enablemaxheight') {
            storedEnableMaxHeightState.current = checkboxStates['enablemaxheight'] || false;
          }
        }
      }
    }

    // Set initial disabled state for multirowselection based on multicellselection state
    if (id === 'multirowselection') {
      if (checkboxReference[id]) {
        const isMultiCellSelectionEnabled = checkboxStates['multicellselection'] || false;

        // If it's initially disabled, store its state
        if (!isMultiCellSelectionEnabled) {
          disableCheckbox(id);
          storedMultiRowSelectionState.current = checkboxStates['multirowselection'] || false;
        }
      }
    }

    // Handle the dependency chain
    const isEditingEnabled = checkboxStates['allowediting'] || false;
    const isDragAndDropEnabled = isEditingEnabled && (checkboxStates['draganddrop'] || false);

    // Set initial disabled state for draganddrop based on allowediting state
    if (id === 'draganddrop') {
      if (checkboxReference[id]) {

        // If it's initially disabled, store its state
        if (!isEditingEnabled) {
          disableCheckbox(id);
          storedDragAndDropState.current = checkboxStates['draganddrop'] || false;
        }
      }
    }

    // Set initial disabled state for multidrag and recurrencevalidation
    // They depend on both allowediting AND draganddrop
    if (id === 'multidrag' || id === 'recurrencevalidation') {
      if (checkboxReference[id]) {

        // If it's initially disabled, store its state
        if (!isDragAndDropEnabled) {
          disableCheckbox(id);
          if (id === 'multidrag') {
            storedMultiDragState.current = checkboxStates['multidrag'] || false;
          } else if (id === 'recurrencevalidation') {
            storedRecurrenceValidationState.current = checkboxStates['recurrencevalidation'] || false;
          }
        }
      }
    }

    // Apply disabled state for timescale controls
    if (['majorslottemplate', 'minorslottemplate'].includes(id)) {
      if (checkboxReference[id]) {
        const isTimescaleEnabled = checkboxStates['enabletimescale'] || false;
        if (!isTimescaleEnabled) {
          disableCheckbox(id);
        }
      }
    }

    // Set initial disabled state for editfollowingevents based on allowediting state
    if (id === 'editfollowingevents') {
      if (checkboxReference[id]) {
        const isEditingEnabled = checkboxStates['allowediting'] || false;
        // If it's initially disabled, store its state
        if (!isEditingEnabled) {
          disableCheckbox(id);
          storedEditFollowingEventsState.current = checkboxStates['editfollowingevents'] || false;
        }
      }
    }

    // Set initial disabled state for quickinfotemplate based on quickinfo state
    if (id === 'quickinfotemplate') {
      if (checkboxReference[id]) {
        const isQuickInfoEnabled = checkboxStates['quickinfo'] || false;
        // If it's initially disabled, store its state
        if (!isQuickInfoEnabled) {
          disableCheckbox(id);
          storedQuickInfoTemplateState.current = checkboxStates['quickinfotemplate'] || false;
        }
      }
    }

    // Set initial disabled state for tooltiptemplate based on enabletooltip state
    if (id === 'tooltiptemplate') {
      if (checkboxReference[id]) {
        const isTooltipEnabled = checkboxStates['enabletooltip'] || false;
        // If it's initially disabled, store its state
        if (!isTooltipEnabled) {
          disableCheckbox(id);
          storedTooltipTemplateState.current = checkboxStates['tooltiptemplate'] || false;
        }
      }
    }

    // Handle initial state for enablegrouping
    if (id === 'enablegrouping') {
      if (checkboxReference[id]) {
        // Check if any of the template checkboxes are enabled
        const shouldDisable = checkboxStates['eventtemplate'] ||
          checkboxStates['celltemplate'] ||
          checkboxStates['headerrow'] ||
          checkboxStates['headerrowstemplate'];

        if (shouldDisable) {
          // Store the initial state before disabling
          storedEnableGroupingState.current = checkboxStates['enablegrouping'] || false;
          disableCheckbox(id);
        }
      }
    }

    // Handle initial state for template checkboxes
    if (id === 'eventtemplate' || id === 'celltemplate' || id === 'headerrow' || id === 'headerrowstemplate') {
      if (checkboxReference[id] && checkboxStates[id]) {
        // If any template checkbox is initially checked, disable enablegrouping
        storedEnableGroupingState.current = checkboxStates['enablegrouping'] || false;
        disableCheckbox('enablegrouping');
      }
    }

    // Check initial state for all checkboxes based on current view and template status
    if (currentViewRef.current === 'Month' && checkboxStates['eventtemplate'] &&
      (id === 'resizing' || id === 'draganddrop')) {
      disableCheckbox(id);
    }
  }

  // For dropdowns, add a created callback:
  const dropdownCreated = (id: string | undefined, dropdownReference: Record<string, DropDownListComponent>) => {
    const isEnableGroupingChecked = (checkboxStates['enablegrouping'] || false) && !(checkboxStates['eventtemplate'] || checkboxStates['celltemplate'] || checkboxStates['headerrow'] || checkboxStates['headerrowstemplate']);

    // Check if this dropdown belongs to Resource Settings
    if (id === 'scrolltoresource') {
      if (dropdownReference[id]) {
        dropdownReference[id].enabled = isEnableGroupingChecked;
      }
    }

    // Set initial disabled state for weekrule dropdown based on showweeknumbers state
    if (id === 'weekrule') {
      if (dropdownReference[id]) {
        const isShowWeekNumbersEnabled = checkboxStates['showweeknumbers'] || false;
        dropdownReference[id].enabled = isShowWeekNumbersEnabled;

        // If it's initially disabled, store its value
        if (!isShowWeekNumbersEnabled) {
          storedWeekRuleState.current = dropdownValues['weekrule'] as string || defaultWeekRule;
        }
      }
    }

    // Set the correct data source for firstdayofweek dropdown
    if (id === 'firstdayofweek') {
      if (dropdownReference[id]) {
        dropdownReference[id].dataSource = currentWeekDaysRef.current;
      }
    }

    // Apply disabled state for timescale dropdowns
    if (id && ['timeformat', 'slotinterval', 'slotcount'].includes(id)) {
      if (dropdownReference[id]) {
        const isTimescaleEnabled = checkboxStates['enabletimescale'] || false;
        dropdownReference[id].enabled = isTimescaleEnabled;
      }
    }

  };

  const timepickerCreated = (id: string, timepickerReference: Record<string, TimePickerComponent>) => {
    // Apply disabled state for timescale timepickers
    if (['starthour', 'endhour', 'scrollto', 'workhours-start', 'workhours-end'].includes(id)) {
      if (timepickerReference[id]) {
        const isTimescaleEnabled = checkboxStates['enabletimescale'] || false;
        timepickerReference[id].enabled = isTimescaleEnabled;
      }
    }
  }

  // For multiselect components:
  const multiselectCreated = (id: string, multiselectReference: Record<string, MultiSelectComponent>) => {
    const isEnableGroupingChecked = (checkboxStates['enablegrouping'] || false) && !(checkboxStates['eventtemplate'] || checkboxStates['celltemplate'] || checkboxStates['headerrow'] || checkboxStates['headerrowstemplate']);

    // Check if this multiselect belongs to Resource Settings
    if (id === 'expandedfield') {
      multiselectReference[id].enabled = isEnableGroupingChecked;
    }

    // Set the correct data source for workdays multiselect
    if (id === 'workdays') {
      if (multiselectReference[id]) {
        multiselectReference[id].dataSource = currentWeekDaysRef.current;
      }
    }
  };

  const handleCheckboxChange = (id: string, isChecked: boolean, checkboxReference: Record<string, CheckBoxComponent>) => {
    setCheckboxStates((prevValues) => {
      // Create new state object with the current change
      const newValues = {
        ...prevValues,
        [id]: isChecked,
      };

      // Handle celltemplate specifically affecting allowadding
      if (id === 'celltemplate') {
        if (isChecked) {
          // If celltemplate is being checked, disable allowadding
          disableCheckbox('allowadding');
          // Update the scheduler property
          if (scheduleObj.current) {
            scheduleObj.current.eventSettings.allowAdding = storedAllowAddingState.current;
          }
        } else {
          // If celltemplate is being unchecked, re-enable allowadding
          enableCheckbox('allowadding');
          // Update the scheduler property
          if (scheduleObj.current) {
            scheduleObj.current.eventSettings.allowAdding = storedAllowAddingState.current;
          }
        }
      }

      // Handle template checkboxes affecting allowinlineedting
      if (id === 'celltemplate' || id === 'eventtemplate') {
        // Check if any template checkbox is being checked
        if (isChecked) {
          // Store the current state before disabling
          storedInlineEditingState.current = prevValues['allowinlineedting'] || false;

          // Disable the checkbox
          disableCheckbox('allowinlineedting');

          // Update the state
          newValues['allowinlineedting'] = false;

          // Update the scheduler property
          if (scheduleObj.current) {
            scheduleObj.current.allowInline = false;
          }
        } else {
          // Check if both template checkboxes are now unchecked
          const areBothTemplatesDisabled =
            (id === 'celltemplate' && !prevValues['eventtemplate']) ||
            (id === 'eventtemplate' && !prevValues['celltemplate']);

          if (areBothTemplatesDisabled) {
            // Re-enable the checkbox
            enableCheckbox('allowinlineedting');

            // Restore the previous state
            if (checkboxReference['allowinlineedting']) {
              checkboxReference['allowinlineedting'].checked = storedInlineEditingState.current;
              newValues['allowinlineedting'] = storedInlineEditingState.current;
            }

            // Update the scheduler property
            if (scheduleObj.current) {
              scheduleObj.current.allowInline = storedInlineEditingState.current;
            }
          }
        }
      }

      // Handle "showweekend" checkbox specifically
      if (id === 'showweekend') {
        if (!isChecked) {
          // Filter out Saturday (6) and Sunday (0) from the weekdays dropdown
          const filteredWeekDays = originalWeekDaysRef.current.filter(day => day.value !== 0 && day.value !== 6);
          // Update the ref with filtered data
          currentWeekDaysRef.current = filteredWeekDays;
          // Update the dropdown data source
          if (dropdownRefs.current['firstdayofweek']) {
            dropdownRefs.current['firstdayofweek'].dataSource = filteredWeekDays;
            // If the current selected day is a weekend day, change it to Monday (1)
            const currentValue = dropdownValues['firstdayofweek'];
            if (currentValue === 0 || currentValue === 6) {
              dropdownRefs.current['firstdayofweek'].value = 1;
              setDropdownValues(prev => ({
                ...prev,
                'firstdayofweek': 1
              }));
            }
          }
          // Update the multiselect data source
          if (multiselectRefs.current['workdays']) {
            multiselectRefs.current['workdays'].dataSource = filteredWeekDays;
            // Filter out weekend days from the current selection
            const currentWorkDays = multiSelectValues['workdays'] as number[] || [];
            const filteredWorkDays = currentWorkDays.filter(day => day !== 0 && day !== 6);
            multiselectRefs.current['workdays'].value = filteredWorkDays;
            setMultiSelectValues(prev => ({
              ...prev,
              'workdays': filteredWorkDays
            }));
          }
        } else {
          // Restore the original weekdays data
          currentWeekDaysRef.current = [...originalWeekDaysRef.current];
          if (dropdownRefs.current['firstdayofweek']) {
            dropdownRefs.current['firstdayofweek'].dataSource = originalWeekDaysRef.current;
          }
          if (multiselectRefs.current['workdays']) {
            multiselectRefs.current['workdays'].dataSource = originalWeekDaysRef.current;
          }
        }
      }

      // Handle "showweeknumbers" checkbox specifically
      if (id === 'showweeknumbers') {
        if (!isChecked) {
          // Store the current dropdown value before disabling
          storedWeekRuleState.current = dropdownValues['weekrule'] as string || defaultWeekRule;
          // Disable the dropdown
          if (dropdownRefs.current['weekrule']) {
            dropdownRefs.current['weekrule'].enabled = false;
          }
        } else {
          // Re-enable the dropdown
          if (dropdownRefs.current['weekrule']) {
            dropdownRefs.current['weekrule'].enabled = true;
            // Restore the previous value
            dropdownRefs.current['weekrule'].value = storedWeekRuleState.current;
            // Also restore in the state object
            setDropdownValues(prev => ({
              ...prev,
              'weekrule': storedWeekRuleState.current
            }));
          }
        }
      }

      // Handle "allowediting" checkbox (top-level dependency)
      if (id === 'allowediting') {
        if (!isChecked) {
          // Store the current states before disabling
          storedDragAndDropState.current = prevValues['draganddrop'] || false;
          storedMultiDragState.current = prevValues['multidrag'] || false;
          storedRecurrenceValidationState.current = prevValues['recurrencevalidation'] || false;
          storedEditFollowingEventsState.current = prevValues['editfollowingevents'] || false;

          // Disable all dependent checkboxes using class
          disableCheckbox('draganddrop');
          disableCheckbox('multidrag');
          disableCheckbox('recurrencevalidation');
          disableCheckbox('editfollowingevents');
        } else {
          // Re-enable draganddrop checkbox
          enableCheckbox('draganddrop');
          // Restore the previous state
          if (checkboxReference['draganddrop']) {
            checkboxReference['draganddrop'].checked = storedDragAndDropState.current;
            // Also restore in the state object
            newValues['draganddrop'] = storedDragAndDropState.current;
          }

          // Re-enable editfollowingevents checkbox
          enableCheckbox('editfollowingevents');
          // Restore the previous state
          if (checkboxReference['editfollowingevents']) {
            checkboxReference['editfollowingevents'].checked = storedEditFollowingEventsState.current;
            // Also restore in the state object
            newValues['editfollowingevents'] = storedEditFollowingEventsState.current;
          }

          // If draganddrop was enabled, also enable its dependent checkboxes
          if (storedDragAndDropState.current) {
            enableCheckbox('multidrag');
            enableCheckbox('recurrencevalidation');

            if (checkboxReference['multidrag']) {
              checkboxReference['multidrag'].checked = storedMultiDragState.current;
              newValues['multidrag'] = storedMultiDragState.current;
            }

            if (checkboxReference['recurrencevalidation']) {
              checkboxReference['recurrencevalidation'].checked = storedRecurrenceValidationState.current;
              newValues['recurrencevalidation'] = storedRecurrenceValidationState.current;
            }
          } else {
            // If draganddrop was disabled, keep its dependent checkboxes disabled
            disableCheckbox('multidrag');
            disableCheckbox('recurrencevalidation');
          }
        }
      }

      // Handle "draganddrop" checkbox (second-level dependency)
      if (id === 'draganddrop') {
        if (!isChecked) {
          // Store the current states before disabling
          storedMultiDragState.current = prevValues['multidrag'] || false;
          storedRecurrenceValidationState.current = prevValues['recurrencevalidation'] || false;

          // Disable the checkboxes using class
          disableCheckbox('multidrag');
          disableCheckbox('recurrencevalidation');
        } else {
          // Re-enable the checkboxes
          enableCheckbox('multidrag');
          enableCheckbox('recurrencevalidation');

          // Restore the previous states
          if (checkboxReference['multidrag']) {
            checkboxReference['multidrag'].checked = storedMultiDragState.current;
            newValues['multidrag'] = storedMultiDragState.current;
          }

          if (checkboxReference['recurrencevalidation']) {
            checkboxReference['recurrencevalidation'].checked = storedRecurrenceValidationState.current;
            newValues['recurrencevalidation'] = storedRecurrenceValidationState.current;
          }
        }
      }

      // Handle "multicellselection" checkbox specifically
      if (id === 'multicellselection') {
        if (!isChecked) {
          // Store the current state before disabling
          storedMultiRowSelectionState.current = prevValues['multirowselection'] || false;
          // Disable the checkbox using class
          disableCheckbox('multirowselection');
        } else {
          // Re-enable the checkbox
          enableCheckbox('multirowselection');
          // Restore the previous state
          if (checkboxReference['multirowselection']) {
            checkboxReference['multirowselection'].checked = storedMultiRowSelectionState.current;
            newValues['multirowselection'] = storedMultiRowSelectionState.current;
          }
        }
      }

      // Handle "rowautoheight" checkbox specifically - INVERSE relationship
      if (id === 'rowautoheight') {
        if (isChecked) {
          // Store the current states before disabling
          storedShowMoreIndicatorState.current = prevValues['enableindicator'] || false;
          storedEnableMaxHeightState.current = prevValues['enablemaxheight'] || false;

          // Disable the checkboxes using class
          disableCheckbox('enableindicator');
          disableCheckbox('enablemaxheight');

          // Enable ignorewhitespace
          enableCheckbox('ignorewhitespace');
          // Restore the previous state
          if (checkboxReference['ignorewhitespace']) {
            checkboxReference['ignorewhitespace'].checked = storedIgnoreWhitespaceState.current;
            newValues['ignorewhitespace'] = storedIgnoreWhitespaceState.current;
          }
        } else {
          // Store the current state before disabling
          storedIgnoreWhitespaceState.current = prevValues['ignorewhitespace'] || false;

          // Re-enable the checkboxes
          enableCheckbox('enableindicator');
          enableCheckbox('enablemaxheight');

          // Restore the previous states
          if (checkboxReference['enableindicator']) {
            checkboxReference['enableindicator'].checked = storedShowMoreIndicatorState.current;
            newValues['enableindicator'] = storedShowMoreIndicatorState.current;
          }

          if (checkboxReference['enablemaxheight']) {
            checkboxReference['enablemaxheight'].checked = storedEnableMaxHeightState.current;
            newValues['enablemaxheight'] = storedEnableMaxHeightState.current;
          }

          // Disable ignorewhitespace
          disableCheckbox('ignorewhitespace');
        }
      }

      // Handle "Show Quick Info" checkbox specifically
      if (id === 'quickinfo') {
        if (!isChecked) {
          // Store the current states before disabling
          storedQuickInfoOnSelectionEndState.current = prevValues['quickinfoonselectionend'] || false;
          storedQuickInfoTemplateState.current = prevValues['quickinfotemplate'] || false;

          // Disable the checkboxes using class
          disableCheckbox('quickinfoonselectionend');
          disableCheckbox('quickinfotemplate');
        } else {
          // Re-enable the checkboxes
          enableCheckbox('quickinfoonselectionend');
          enableCheckbox('quickinfotemplate');

          // Restore the previous states
          if (checkboxReference['quickinfoonselectionend']) {
            checkboxReference['quickinfoonselectionend'].checked = storedQuickInfoOnSelectionEndState.current;
            newValues['quickinfoonselectionend'] = storedQuickInfoOnSelectionEndState.current;
          }

          if (checkboxReference['quickinfotemplate']) {
            checkboxReference['quickinfotemplate'].checked = storedQuickInfoTemplateState.current;
            newValues['quickinfotemplate'] = storedQuickInfoTemplateState.current;
          }
        }
      }

      // Handle "enabletooltip" checkbox specifically
      if (id === 'enabletooltip') {
        if (!isChecked) {
          // Store the current state before disabling
          storedTooltipTemplateState.current = prevValues['tooltiptemplate'] || false;
          // Disable the checkbox using class
          disableCheckbox('tooltiptemplate');
        } else {
          // Re-enable the checkbox
          enableCheckbox('tooltiptemplate');
          // Restore the previous state
          if (checkboxReference['tooltiptemplate']) {
            checkboxReference['tooltiptemplate'].checked = storedTooltipTemplateState.current;
            newValues['tooltiptemplate'] = storedTooltipTemplateState.current;
          }
        }
      }

      // Handle template checkboxes affecting enablegrouping
      if (id === 'eventtemplate' || id === 'celltemplate' || id === 'headerrow' || id === 'headerrowstemplate') {
        // Check if any template checkbox is being checked
        if (isChecked) {
          // Store the current state of enablegrouping before disabling
          storedEnableGroupingState.current = prevValues['enablegrouping'] || false;

          // Disable enablegrouping
          disableCheckbox('enablegrouping');
          newValues['enablegrouping'] = false;
        } else {
          // Check if all template checkboxes are now unchecked
          const allTemplatesUnchecked = !newValues['eventtemplate'] &&
            !newValues['celltemplate'] &&
            !newValues['headerrow'] &&
            !newValues['headerrowstemplate'];

          if (allTemplatesUnchecked) {
            // Re-enable enablegrouping
            enableCheckbox('enablegrouping');

            // Restore the previous state
            if (checkboxReference['enablegrouping']) {
              checkboxReference['enablegrouping'].checked = storedEnableGroupingState.current;
              newValues['enablegrouping'] = storedEnableGroupingState.current;
            }
          }
        }
      }

      // Handle enablegrouping checkbox
      if (id === 'enablegrouping') {
        // Store the state for future restoration
        storedEnableGroupingState.current = isChecked;

        // Get all Resource Settings controls that should be affected
        const resourceControls = {
          checkboxes: ['allowgroupedit', 'resourceheader'],
          dropdowns: ['scrolltoresource'],
          multiselects: ['expandedfield']
        };

        // Enable or disable the controls based on enablegrouping state
        if (isChecked) {
          // Enable controls
          resourceControls.checkboxes.forEach(controlId => {
            enableCheckbox(controlId);
          });
          if (dropdownRefs.current['scrolltoresource']) {
            dropdownRefs.current['scrolltoresource'].enabled = true;
          }
          if (multiselectRefs.current['expandedfield']) {
            multiselectRefs.current['expandedfield'].enabled = true;
          }
        } else {
          // Disable controls
          resourceControls.checkboxes.forEach(controlId => {
            disableCheckbox(controlId);
          });
          if (dropdownRefs.current['scrolltoresource']) {
            dropdownRefs.current['scrolltoresource'].enabled = false;
          }
          if (multiselectRefs.current['expandedfield']) {
            multiselectRefs.current['expandedfield'].enabled = false;
          }
        }
      }

      // Handle "enabletimescale" checkbox specifically
      if (id === 'enabletimescale') {
        // Get all timescale-related controls that should be affected
        const timescaleControls = {
          checkboxes: ['majorslottemplate', 'minorslottemplate'],
          dropdowns: ['timeformat', 'slotinterval', 'slotcount'],
          timepickers: ['starthour', 'endhour', 'scrollto']
        };

        if (!isChecked) {
          // Store current states before disabling
          const storedStates = {
            majorslottemplate: prevValues['majorslottemplate'] || false,
            minorslottemplate: prevValues['minorslottemplate'] || false,
            timeformat: dropdownValues['timeformat'],
            slotinterval: dropdownValues['slotinterval'],
            slotcount: dropdownValues['slotcount'],
            starthour: timePickerValues['starthour'],
            endhour: timePickerValues['endhour'],
            scrollto: timePickerValues['scrollto'],
            'workhours-start': timePickerValues['workhours-start'],
            'workhours-end': timePickerValues['workhours-end']
          };

          // Store these values in a ref for later restoration
          timescaleStoredStatesRef.current = storedStates;

          // Disable controls using class for checkboxes
          timescaleControls.checkboxes.forEach(controlId => {
            disableCheckbox(controlId);
          });

          // Disable dropdowns
          timescaleControls.dropdowns.forEach(controlId => {
            if (dropdownRefs.current[controlId]) {
              dropdownRefs.current[controlId].enabled = false;
            }
          });

          // Disable timepickers
          timescaleControls.timepickers.forEach(controlId => {
            if (timepickerRefs.current[controlId]) {
              timepickerRefs.current[controlId].enabled = false;
            }
          });

          // Disable work hours timepickers
          if (timepickerRefs.current['workhours-start']) {
            timepickerRefs.current['workhours-start'].enabled = false;
          }
          if (timepickerRefs.current['workhours-end']) {
            timepickerRefs.current['workhours-end'].enabled = false;
          }

          // Also disable the work hours container
          const workHoursContainer = document.querySelector('.workhour-with-timepicker-label');
          if (workHoursContainer) {
            workHoursContainer.classList.add('e-disabled');
          }
        } else {
          // Re-enable controls and restore their values
          timescaleControls.checkboxes.forEach(controlId => {
            enableCheckbox(controlId);

            // Restore previous state if available
            if (timescaleStoredStatesRef.current && timescaleStoredStatesRef.current[controlId] !== undefined) {
              if (checkboxReference[controlId]) {
                checkboxReference[controlId].checked = timescaleStoredStatesRef.current[controlId] as boolean;
                newValues[controlId] = timescaleStoredStatesRef.current[controlId] as boolean;
              }
            }
          });

          // Re-enable dropdowns
          timescaleControls.dropdowns.forEach(controlId => {
            if (dropdownRefs.current[controlId]) {
              dropdownRefs.current[controlId].enabled = true;

              // Restore previous value if available
              if (timescaleStoredStatesRef.current && timescaleStoredStatesRef.current[controlId] !== undefined) {
                dropdownRefs.current[controlId].value = timescaleStoredStatesRef.current[controlId];
                setDropdownValues(prev => ({
                  ...prev,
                  [controlId]: timescaleStoredStatesRef.current[controlId]
                }));
              }
            }
          });

          // Re-enable timepickers
          timescaleControls.timepickers.forEach(controlId => {
            if (timepickerRefs.current[controlId]) {
              timepickerRefs.current[controlId].enabled = true;

              // Restore previous value if available
              if (timescaleStoredStatesRef.current && timescaleStoredStatesRef.current[controlId] !== undefined) {
                timepickerRefs.current[controlId].value = timescaleStoredStatesRef.current[controlId] as Date;
                setTimePickerValues(prev => ({
                  ...prev,
                  [controlId]: timescaleStoredStatesRef.current[controlId] as Date
                }));
              }
            }
          });

          // Re-enable work hours timepickers
          if (timepickerRefs.current['workhours-start']) {
            timepickerRefs.current['workhours-start'].enabled = true;
            if (timescaleStoredStatesRef.current && timescaleStoredStatesRef.current['workhours-start']) {
              timepickerRefs.current['workhours-start'].value = timescaleStoredStatesRef.current['workhours-start'] as Date;
              setTimePickerValues(prev => ({
                ...prev,
                'workhours-start': timescaleStoredStatesRef.current['workhours-start'] as Date
              }));
            }
          }

          if (timepickerRefs.current['workhours-end']) {
            timepickerRefs.current['workhours-end'].enabled = true;
            if (timescaleStoredStatesRef.current && timescaleStoredStatesRef.current['workhours-end']) {
              timepickerRefs.current['workhours-end'].value = timescaleStoredStatesRef.current['workhours-end'] as Date;
              setTimePickerValues(prev => ({
                ...prev,
                'workhours-end': timescaleStoredStatesRef.current['workhours-end'] as Date
              }));
            }
          }

          // Remove disabled styling from work hours container
          const workHoursContainer = document.querySelector('.workhour-with-timepicker-label');
          if (workHoursContainer) {
            workHoursContainer.classList.remove('e-disabled');
          }
        }
      }

      if (id === 'eventtemplate') {
        // Store current states if not already stored
        if (storedResizingState.current === undefined) {
          storedResizingState.current = prevValues['resizing'] || false;
        }
        if (storedDragAndDropState.current === undefined) {
          storedDragAndDropState.current = prevValues['draganddrop'] || false;
        }

        // Calculate new state with the current change
        const updatedValues = {
          ...prevValues,
          [id]: isChecked
        };

        // Determine if resizing and draganddrop should be disabled
        const shouldDisable = shouldDisableResizingAndDragDrop(updatedValues);

        if (shouldDisable) {
          // Store the current states before disabling (if not already stored)
          storedResizingState.current = prevValues['resizing'] || false;
          storedDragAndDropState.current = prevValues['draganddrop'] || false;

          // Disable the checkboxes using class
          disableCheckbox('resizing');
          disableCheckbox('draganddrop');

          // Update the scheduler properties
          if (scheduleObj.current) {
            scheduleObj.current.allowResizing = false;
            scheduleObj.current.allowDragAndDrop = false;
          }

          // Update state values
          newValues['resizing'] = storedResizingState.current;
          newValues['draganddrop'] = storedDragAndDropState.current;
        } else {
          storedResizingState.current = prevValues['resizing'] || false;
          storedDragAndDropState.current = prevValues['draganddrop'] || false;
          // Re-enable the checkboxes
          enableCheckbox('resizing');
          enableCheckbox('draganddrop');

          // Restore the previous states
          if (checkboxReference['resizing']) {
            checkboxReference['resizing'].checked = storedResizingState.current;
            newValues['resizing'] = storedResizingState.current;
          }
          if (checkboxReference['draganddrop']) {
            checkboxReference['draganddrop'].checked = storedDragAndDropState.current;
            newValues['draganddrop'] = storedDragAndDropState.current;
          }

          // Update the scheduler properties
          if (scheduleObj.current) {
            scheduleObj.current.allowResizing = storedResizingState.current;
            scheduleObj.current.allowDragAndDrop = storedDragAndDropState.current;
          }
        }
      }

      // Similar logic for headerrow, headerrowstemplate, and enablegrouping checkboxes
      if (id === 'headerrow' || id === 'headerrowstemplate' || id === 'enablegrouping') {
        // If any of these are being enabled, we should enable resizing and drag/drop
        if (isChecked && shouldEnableResizingAndDragDrop()) {
          enableCheckbox('resizing');
          enableCheckbox('draganddrop');

          // Restore the previous states
          if (checkboxReference['resizing']) {
            checkboxReference['resizing'].checked = storedResizingState.current;
            newValues['resizing'] = storedResizingState.current;
          }
          if (checkboxReference['draganddrop']) {
            checkboxReference['draganddrop'].checked = storedDragAndDropState.current;
            newValues['draganddrop'] = storedDragAndDropState.current;
          }

          // Update the scheduler properties
          if (scheduleObj.current) {
            scheduleObj.current.allowResizing = storedResizingState.current;
            scheduleObj.current.allowDragAndDrop = storedDragAndDropState.current;
          }
        }
      }

      // Handle tooltip template checkbox
      if (id === 'tooltiptemplate') {
        // Store the template state in checkboxStates
        newValues.tooltipTemplate = isChecked;
      }

      if (id === 'majorslottemplate') {
        newValues.majorSlotTemplate = isChecked;
      }

      if (id === 'minorslottemplate') {
        newValues.minorSlotTemplate = isChecked;
      }

      if (id === 'dateheader') {
        newValues.dateHeaderTemplate = isChecked;
      }

      if (id === 'eventtemplate' || id === 'celltemplate' || id === 'headerrow' || id === 'headerrowstemplate') {
        newValues['enablegrouping'] = false;
      }

      return newValues;
    });
  };

  const workHourTimepickerCreated = (id: string, timepickerReference: Record<string, TimePickerComponent>) => {
    // Apply disabled state for work hours timepickers based on timescale state
    if (id === 'workhours-start' || id === 'workhours-end') {
      if (timepickerReference[id]) {
        const isTimescaleEnabled = checkboxStates['enabletimescale'] || false;
        timepickerReference[id].enabled = isTimescaleEnabled;
      }
    }
  }

  const localizationFlagTemplate = (data: any) => {
    return (
      <span><img className="country_image_flag_template" src={data.image} alt={data.text} /><span> &nbsp;&nbsp; {data.text}</span></span>
    );
  }

  const valueTemplate = (data: any) => {
    return (<div className="country_image_value_template"><span><img className="country_image_flag_template" src={data.image} alt={data.text} /><span> &nbsp;&nbsp; {data.text}</span></span></div>);
  }

  const checkboxConfigurations: CheckboxConfigurations = {
    'Scheduler Settings': [
      {
        groupField: 'General Settings',
        items: [
          { id: 'readonlyschedule', label: 'Enable Read Only Mode', defaultChecked: false },
          { id: 'resizing', label: 'Allow Event Resizing', defaultChecked: true },
          { id: 'timeindicator', label: 'Show Time Indicator', defaultChecked: true },
          { id: 'quickinfo', label: 'Show Quick Info', defaultChecked: true },
          { id: 'quickinfoonselectionend', label: 'Show Quick Info On Selection End', defaultChecked: false },
          { id: 'separator', label: 'Separator', type: 'separator' }
        ]
      },
      {
        groupField: 'Header Settings',
        items: [
          { id: 'headerrow', label: 'Show Header Row', defaultChecked: false },
          { id: 'alldayscroll', label: 'Enable All Day Scroll', defaultChecked: false },
          { id: 'dateheader', label: 'Show Date Header Template', defaultChecked: false },
          { id: 'separator', label: 'Separator', type: 'separator' }
        ]
      },
      {
        groupField: 'Row Settings',
        items: [
          { id: 'rowautoheight', label: 'Enable Row Auto Height', defaultChecked: false },
          { id: 'ignorewhitespace', label: 'Ignore Whitespace', defaultChecked: false },
          { id: 'separator', label: 'Separator', type: 'separator' }
        ]
      },
      {
        groupField: 'Selection Settings',
        items: [
          { id: 'multicellselection', label: 'Allow Multiple Cell Selection', defaultChecked: true },
          { id: 'multirowselection', label: 'Allow Multiple Row Selection', defaultChecked: true },
          { id: 'separator', label: 'Separator', type: 'separator' }
        ]
      },
      {
        groupField: 'Drag and Drop Settings',
        items: [
          { id: 'draganddrop', label: 'Allow Drag and Drop', defaultChecked: true },
          { id: 'multidrag', label: 'Allow Multiple Drag', defaultChecked: false },
          { id: 'recurrencevalidation', label: 'Enable Recurrence Validation', defaultChecked: true },
          { id: 'separator', label: 'Separator', type: 'separator' }
        ]
      },

      {
        groupField: 'Agenda Settings',
        items: [
          { id: 'hideemptyagendadays', label: 'Hide Empty Agenda Days', defaultChecked: true },
          { id: 'agendadayscount', label: 'No of Days in Agenda View', type: 'numerictextbox', numericTextboxvalue: defaultAgendaDaysCount, numericTextboxMin: 1, numericTextboxMax: 30, numericTextboxformat: 'n0' }
        ]
      }
    ],
    'Calendar Settings': [
      {
        groupField: 'General Settings',
        items: [

          { id: 'showweekend', label: 'Show Weekend', defaultChecked: true },
          { id: 'showweeknumbers', label: 'Show Week Numbers', defaultChecked: false },
          { id: 'dateformat', label: 'Set Date Format', type: 'dropdown', dropdownDataSource: dateTimeDataTypes, dropdownFields: datetimeFieldsMapping },
          { id: 'weekrule', label: 'Set Week Rule', type: 'dropdown', dropdownDataSource: weekNumberData, dropdownFields: dropdownFieldsMapping, dropdownValue: defaultWeekRule },
          { id: 'firstdayofweek', label: 'Set First Day Of Week', type: 'dropdown', dropdownDataSource: weekDays, dropdownFields: dropdownFieldsMapping, dropdownValue: defaultFirstDayOfWeek },
          { id: 'firstmonthofyear', label: 'Set First Month Of Year', type: 'dropdown', dropdownDataSource: months, dropdownValue: defaultFirstMonthOfYear, dropdownFields: dropdownFieldsMapping },
          { id: 'workdays', label: 'Set Work Days', type: 'multiselect', dropdownFields: dropdownFieldsMapping, dropdownDataSource: weekDays, multiselectDropDownvalue: workDaysView, multiselectShowSelectAll: false },
          { id: 'calendarmode', label: 'Set Calendar Mode', type: 'dropdown', dropdownFields: dropdownFieldsMapping, dropdownDataSource: calendarModeOptions, dropdownValue: calendarMode },
          { id: 'timezone', label: 'Set Time zone', type: 'dropdown', dropdownFields: dropdownFieldsMapping, dropdownDataSource: timezoneData, dropdownValue: defaultTimezone },
          { id: 'monthscount', label: 'Set Months Count', type: 'numerictextbox', numericTextboxvalue: defaultMonthsCountYear, numericTextboxMin: 1, numericTextboxMax: 30, numericTextboxformat: 'n0' },
          { id: 'selecteddate', label: 'Set Selected Date', type: 'datepicker', displayDateValue: scheduleDate, timePickerFloatLabelType: 'Always' },
          { id: 'maxmindate', label: 'Set Min and Max Date', type: 'maxMinDatepicker', maxDateLabel: 'Maximum Date', minDateLabel: 'Minimum Date', maxDateValue: maxDate, minDateValue: minDate, timePickerFloatLabelType: 'Always' }
        ]
      }
    ],
    'Timescale Settings': [
      {
        groupField: 'General Settings',
        items: [
          { id: 'enabletimescale', label: 'Show Timescale', defaultChecked: true },
          { id: 'majorslottemplate', label: 'Show Major Slot Template', defaultChecked: false },
          { id: 'minorslottemplate', label: 'Show Minor Slot Template', defaultChecked: false },
          { id: 'timeformat', label: 'Set Time Format', type: 'dropdown', dropdownDataSource: timeFormatData, dropdownFields: dropdownFieldsMapping, dropdownValue: defaultTimeFormat },
          { id: 'slotinterval', label: 'Set Interval(in Hour)', type: 'dropdown', dropdownFields: dropdownFieldsMapping, dropdownDataSource: majorSlotData, dropdownValue: 60 },
          { id: 'slotcount', label: 'Set Slot Count', type: 'dropdown', dropdownDataSource: minorSlotData, dropdownValue: 2 },
          { id: 'starthour', label: 'Set Start Hour', type: 'timepicker', timePickerValue: parseTime(dayStartHour) },
          { id: 'endhour', label: 'Set End Hour', type: 'timepicker', timePickerValue: parseTime(dayEndtHour) },
          { id: 'scrollto', label: 'Scroll To Specified Time', type: 'timepicker', timePickerValue: parseTime(defaultScrollTo) },
          { id: 'workhours', label: 'Set Work Hours', type: 'workHourTimepicker', workStartHourLabel: 'Start Hour', workEndHourLabel: 'End Hour', workStartHourValue: parseTime(workStartHour), workEndHourValue: parseTime(workEndtHour), timePickerFloatLabelType: 'Always' }
        ]
      },
    ],
    'Event Settings': [
      {
        groupField: 'General Settings',
        items: [
          { id: 'enablemaxheight', label: 'Occupy Full Cell Height', defaultChecked: false },
          { id: 'enableindicator', label: 'Show More Indicator', defaultChecked: false },
          { id: 'enabletooltip', label: 'Enable Event Tooltip', defaultChecked: true },
          { id: 'resourcecolorfield', label: 'Set Resource Color Field', type: 'dropdown', dropdownFields: dropdownFieldsMapping, dropdownDataSource: resourceColorFieldOptions, dropdownValue: defaultResourceColorField },
          { id: 'spannedeventplacement', label: 'Set Spanned Event placement', type: 'dropdown', dropdownFields: dropdownFieldsMapping, dropdownDataSource: spannedEventPlacementOptions, dropdownValue: defaultSpannedEventPlacement },
          { id: 'separator', label: 'Separator', type: 'separator' }
        ]
      },
      {
        groupField: 'CRUD Settings',
        items: [
          { id: 'allowadding', label: 'Allow Adding', defaultChecked: true },
          { id: 'allowdeleting', label: 'Allow Deleting', defaultChecked: true },
          { id: 'allowediting', label: 'Allow Editing', defaultChecked: true },
          { id: 'editfollowingevents', label: 'Allow Edit Following Recurrence Events', defaultChecked: false },
          { id: 'allowinlineedting', label: 'Allow Inline Editing', defaultChecked: false }
        ]
      }
    ],
    'Resource Settings': [
      {
        groupField: 'General Settings',
        items: [
          { id: 'enablegrouping', label: 'Allow Grouping', defaultChecked: false },
          { id: 'allowgroupedit', label: 'Allow Group Edit', defaultChecked: false },
          { id: 'expandedfield', label: 'Show Expanded Field', type: 'multiselect', dropdownDataSource: calendarCollections, dropdownFields: resourceFieldsMapping, multiselectDropDownvalue: [1], multiselectShowSelectAll: true },
          { id: 'scrolltoresource', label: 'Scroll To Resource', type: 'dropdown', dropdownFields: resourceFieldsMapping, dropdownDataSource: calendarCollections, dropdownValue: defaultScrollToResource },

        ]
      }
    ],
    'Template Settings': [
      {
        groupField: 'Month View Templates',
        items: [
          { id: 'celltemplate', label: 'Show Cell Template', defaultChecked: false },
          { id: 'eventtemplate', label: 'Show Event Template', defaultChecked: false },
          { id: 'separator', label: 'Separator', type: 'separator' }
        ]
      },
      {
        groupField: 'Year View Templates',
        items: [
          { id: 'cellheadertemplate', label: 'Show Cell Header Template', defaultChecked: false },
          { id: 'dayheadertemplate', label: 'Show Day Header Template', defaultChecked: false },
          { id: 'monthheadertemplate', label: 'Show Month Header Template', defaultChecked: false },
          { id: 'separator', label: 'Separator', type: 'separator' }
        ]
      },
      {
        groupField: 'Timeline View Templates',
        items: [
          { id: 'headerrowstemplate', label: 'Show Header Rows Template', defaultChecked: false },
          { id: 'separator', label: 'Separator', type: 'separator' }
        ]
      },
      {
        groupField: 'Popup Templates',
        items: [
          { id: 'editorheadertemplate', label: 'Show Editor Header Template', defaultChecked: false },
          { id: 'editorfootertemplate', label: 'Show Editor Footer Template', defaultChecked: false },
          { id: 'editortemplate', label: 'Show Editor Template', defaultChecked: false },
          { id: 'quickinfotemplate', label: 'Show Quick Info Template', defaultChecked: false },
          { id: 'separator', label: 'Separator', type: 'separator' }
        ]
      },

      {
        groupField: 'Tooltip Template',
        items: [
          { id: 'tooltiptemplate', label: 'Show Event Tooltip Template', defaultChecked: false },
          { id: 'separator', label: 'Separator', type: 'separator' }
        ]
      },
      {
        groupField: 'Resource Template',
        items: [
          { id: 'resourceheader', label: 'Show Resource Header Template', defaultChecked: true }
        ]
      },
    ],
    'Web Standards': [
      {
        groupField: 'General',
        items: [
          { id: 'rtl', label: 'Enable RTL', defaultChecked: false },
          { id: 'localization', label: 'Set Localization', type: 'dropdown', dropdownFields: dropdownFieldsMapping, dropdownDataSource: localizationData, dropdownValue: localization.current, dropdownItemTemplate: localizationFlagTemplate, dropdownValueTemplate: valueTemplate },
          { id: 'themes', label: 'Set Themes', type: 'dropdown', dropdownFields: dropdownFieldsMapping, dropdownDataSource: themeData, dropdownValue: theme.current },
          { id: 'interactiontypes', label: 'Set Interaction Types', type: 'dropdown', dropdownFields: dropdownFieldsMapping, dropdownDataSource: modeData, dropdownValue: displayMode.current },
        ]
      },
    ]
  }

  const [datePickerValues, setDatePickerValues] = useState<{ [key: string]: string }>(() => {
    const initialValues: Record<string, string> = {};
    // Initialize from checkbox configurations
    Object.values(checkboxConfigurations).forEach((category) => {
      category.forEach((group) => {
        if ('groupField' in group) {
          group.items.forEach((item) => {
            // Handle regular datepickers
            if (item.type === 'datepicker') {
              initialValues[item.id] = (item.displayDateValue ?? new Date()).toISOString();
            }

            // Handle max/min datepickers - only add if values exist
            if (item.type === 'maxMinDatepicker') {
              if (item.minDateValue !== undefined) {
                initialValues[`min-${item.id}`] = item.minDateValue.toISOString();
              }
              if (item.maxDateValue !== undefined) {
                initialValues[`max-${item.id}`] = item.maxDateValue.toISOString();
              }
            }
          });
        }
      });
    });

    // Set special date values
    initialValues.selecteddate = scheduleDate.toISOString();
    initialValues.displaydate = displayDate.toISOString();
    if (minDate) initialValues.mindate = (minDate as Date).toISOString();
    if (maxDate) initialValues.maxdate = (maxDate as Date).toISOString();
    return initialValues;
  });

  const [dropdownValues, setDropdownValues] = useState<{ [key: string]: string | number }>(() => {
    const initialValues: Record<string, string | number> = {};

    // Initialize from checkbox configurations
    Object.values(checkboxConfigurations).forEach(category => {
      category.forEach(group => {
        if ('groupField' in group) {
          group.items.forEach(item => {
            // Handle both dropdown and checkboxWithDropdown types
            if (item.type === 'dropdown') {
              initialValues[item.id] = typeof item.dropdownValue === 'string' || typeof item.dropdownValue === 'number' ? item.dropdownValue : '';
            } else if (item.type === 'checkboxWithDropdown' && item.dropdownWithCheckboxId) {
              initialValues[item.dropdownWithCheckboxId] = typeof item.dropdownValue === 'string' || typeof item.dropdownValue === 'number' ? item.dropdownValue : '';
            }
          });
        }
      });
    });

    return initialValues;
  });

  const [timePickerValues, setTimePickerValues] = useState<{ [key: string]: Date }>(() => {
    const initialValues: Record<string, Date> = {};

    // Initialize from checkbox configurations
    Object.values(checkboxConfigurations).forEach(category => {
      category.forEach(group => {
        if ('groupField' in group) {
          group.items.forEach(item => {
            // Handle regular timepickers
            if (item.type === 'timepicker' && item.timePickerValue) {
              initialValues[item.id] = item.timePickerValue;
            }

            // Handle work hour timepickers
            if (item.type === 'workHourTimepicker') {
              if (item.workStartHourValue) {
                initialValues[`${item.id}-start`] = item.workStartHourValue;
              }
              if (item.workEndHourValue) {
                initialValues[`${item.id}-end`] = item.workEndHourValue;
              }
            }
          });
        }
      });
    });

    return initialValues;
  });

  type MultiSelectValue = number | string | boolean | object;// Or number if you only use numbers
  type MultiSelectState = Record<string, MultiSelectValue[]>;

  const [multiSelectValues, setMultiSelectValues] = useState<MultiSelectState>(() => {
    const initialValues: MultiSelectState = {};

    // Initialize with workDaysView for the 'workdays' field
    initialValues['workdays'] = [...workDaysView]; // Create a copy to avoid direct mutation

    Object.values(checkboxConfigurations).forEach(category => {
      category.forEach(group => {
        if ('groupField' in group) {
          group.items.forEach(item => {
            if (item.type === 'multiselect' && item.multiselectDropDownvalue && !initialValues[item.id]) {
              initialValues[item.id] = Array.isArray(item.multiselectDropDownvalue)
                ? item.multiselectDropDownvalue.map(Number).filter(n => !isNaN(n))
                : [Number(item.multiselectDropDownvalue)].filter(n => !isNaN(n));
            }
          });
        }
      });
    });

    return initialValues;
  });

  const [numericTextboxValues, setNumericTextboxValues] = useState<Record<string, number>>(() => {
    const initialValues: Record<string, number> = {};

    // Add any other numeric textbox initial values from configurations
    Object.values(checkboxConfigurations).forEach(category => {
      category.forEach(group => {
        if ('groupField' in group) {
          group.items.forEach(item => {
            if (item.type === 'numerictextbox' && item.numericTextboxvalue !== undefined) {
              initialValues[item.id] = item.numericTextboxvalue;
            }
          });
        }
      });
    });

    return initialValues;
  });

  const [checkboxStates, setCheckboxStates] = useState<Record<string, boolean>>(() => {
    const initialState: Record<string, boolean> = {};

    Object.keys(checkboxConfigurations).forEach((category) => {
      const categoryItems = checkboxConfigurations[category as keyof typeof checkboxConfigurations];

      categoryItems.forEach((item) => {
        if ('groupField' in item) {
          // Item is a CheckboxGroup
          const groupItems = (item as CheckboxGroup).items;

          if (Array.isArray(groupItems)) {
            groupItems.forEach((checkbox) => {
              if ('defaultChecked' in checkbox) {
                initialState[checkbox.id] = checkbox.defaultChecked ?? false;

                // If enablegrouping is initially false, mark dependent controls as disabled
                if (!initialState['enablegrouping']) {
                  initialState['allowgroupedit_disabled'] = true;
                  initialState['resourceheader_disabled'] = true;
                  initialState['scrolltoresource_disabled'] = true;
                  initialState['expandedfield_disabled'] = true;
                }
              }
            });
          }
        } else if ('defaultChecked' in item) {
          // Item is a CheckboxConfig with defaultChecked property
          initialState[item.id] = item.defaultChecked ?? false;
        }
      });
    });

    return initialState;
  });

  const updateResourceSettings = (resourceId: number) => {
    // Get the resource workdays from multiSelectValues
    const workDays = multiSelectValues['resourceworkdays'];

    // Get the work hours start and end times from timePickerValues
    const workHoursStart = timePickerValues['resourceworkhours-start'];
    const workHoursEnd = timePickerValues['resourceworkhours-end'];

    // Update the resourceSettingsRef for this resource
    resourceSettingsRef.current[resourceId] = {
      // Only assign workDays if it exists
      ...(workDays && { workDays: workDays as number[] }),

      // Only create workHours if both start and end exist
      ...(workHoursStart && workHoursEnd && {
        workHours: {
          start: workHoursStart,
          end: workHoursEnd
        }
      })
    };
  };

  const selectItem = () => {
    if (selectedItemRef.current && listViewObj.current) {
      listViewObj.current.selectItem({ id: selectedItemRef.current.id });
    }
  }

  const toolbarDialog = (args: ClickEventArgs) => {
    if (args.item.id === 'overview_toolbar_settings') {
      dialogObj.current?.show();
      let result = scheduleParentProperties.find((item) => item.text.includes(args.item.text ?? ''));
      if (result && listViewObj.current) {
        selectedItemRef.current = result;
        setSelectedIndex(result.text || '');
      }
    }
  };

  const closeSidebar = (args: ClickEventArgs) => {
    calendarSidebarObj.current?.toggle();
  };

  useEffect(() => {
    const handleWindowResize = () => {
      isResized = true;

      if (isResized && (isMenuDesktopOpened || isMenuMobileOpened)) {
        isResized = false;
        menuRef?.close();
        menuMobileRef?.close();
      }
    };
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });

  const menuItems = [
    {
      category: 'LEARNING',
      options: [
        {
          icon: 'platform-image sf-icon-demos',
          link: 'https://ej2.syncfusion.com/react/demos/#/tailwind3/schedule/overview',
          title: 'Demos',
          about: {
            value: 'Explore our exciting product demos.',
          },
        },
        {
          icon: 'platform-image sf-icon-documentation',
          link: 'https://ej2.syncfusion.com/react/documentation/schedule/getting-started',
          title: 'Documentation',
          about: {
            value: 'Comprehensive guides for every product.',
          },
        },
        {
          icon: 'platform-image sf-icon-blog',
          link: 'https://www.syncfusion.com/blogs/',
          title: 'Blog',
          about: {
            value: 'Discover new ideas and perspectives.',
          },
        },
        {
          icon: 'platform-image sf-icon-tutorial-videos',
          link: 'https://www.syncfusion.com/tutorial-videos/react/scheduler',
          title: 'Tutorial Videos',
          about: {
            value: 'Sharpen your skills with our tutorial videos.',
          },
        },
        {
          icon: 'platform-image sf-icon-video-guide',
          link: 'https://www.syncfusion.com/self-service-demo/react/',
          title: 'Video Guides',
          about: {
            value: 'Explore key features in minutes with our quick video guides.',
          },
          isNew: true,
        },
        {
          icon: 'platform-image sf-icon-showcase-app',
          link: 'https://www.syncfusion.com/showcase-apps/react',
          title: 'Showcase Apps',
          about: {
            value: 'Real-time apps built using our UI components.',
          },
          isNew: true,
        }
      ],
    },
  ];
  const menuTemplate = (data: any) => {
    return (
      <a
        href={data.link}
        target="_blank"
        rel="noopener noreferrer"
        className="menu-item"
        data-title={data.title}
      >
        {data.category && (
          <div className="menu-title">{data.category}</div>
        )}
        <div className="menusubitems">
          <div className="icon-spacing">
            <span className={data.icon} />
          </div>
          <span className="menu-item-title">{data.title}</span>
          {data.isNew && <span className="e-badge">NEW</span>}
        </div>
        <div className="description">{data.about?.value}</div>
      </a>
    );
  };

  // Add this function to handle toolbar overflow mode based on window width
  const updateToolbarOverflowMode = () => {
    const toolbarElement = document.querySelector('.e-schedule-toolbar') as HTMLElement;
    if (!toolbarElement) return;

    const eleInstance = (toolbarElement as EJ2Instance).ej2_instances;
    if (!eleInstance || !eleInstance[0]) return;

    // Set overflow mode based on window width
    if (window.innerWidth < 1100) {
      eleInstance[0].overflowMode = 'Scrollable';
    } else {
      eleInstance[0].overflowMode = 'Popup';
    }
  };

  // Add window resize event listener to update toolbar mode
  useEffect(() => {
    // Initial setup
    updateToolbarOverflowMode();

    // Add event listener for window resize
    window.addEventListener('resize', updateToolbarOverflowMode);

    // Cleanup
    return () => {
      window.removeEventListener('resize', updateToolbarOverflowMode);
    };
  }, []);

  const scheduleObjCreated = (): void => {
    updateToolbarOverflowMode();

    setTimeout(() => {
      scheduleObj.current?.refreshLayout();
    }, 100);

    searchDialogObj.current?.hide();
    startWalkthrough();
  }

  const onExportClick = (args: MenuEventArgs): void => {
    if (args.item.text === 'Excel') {
      let exportDatas: Record<string, any>[] = [];
      let eventCollection: Record<string, any>[] = scheduleObj.current ? scheduleObj.current.getEvents() : [];
      let resourceCollection: ResourcesModel[] = scheduleObj.current ? scheduleObj.current.getResourceCollections() : [];
      let resourceData: Record<string, any>[] = resourceCollection[0].dataSource as Record<string, any>[];
      for (let resource of resourceData) {
        let data: Record<string, any>[] = eventCollection.filter((e: Record<string, any>) => e.CalendarId === resource.CalendarId);
        exportDatas = exportDatas.concat(data as Record<string, any>[]);
      }
      if (scheduleObj.current) {
        scheduleObj.current.exportToExcel({ exportType: 'xlsx', customData: exportDatas, fields: ['Id', 'Subject', 'StartTime', 'EndTime', 'CalendarId', 'CategoryId'] });
      }
    } else {
      if (scheduleObj.current) {
        scheduleObj.current.exportToICalendar();
      }
    }
  };

  const dialogObjClose = () => {
    setShowDialog(false);
  };
  const dialogObjOpen = () => {
    selectItem();
  };

  const majorSlotTemplate = (props: { date: Date; }) => {
    return (<div>{instance.formatDate(props.date, { skeleton: 'Hm' })}</div>);
  }

  const minorSlotTemplate = (props: { date: Date; }) => {
    return (<div style={{ textAlign: 'center' }}>{instance.formatDate(props.date, { skeleton: 'ms' }).replace(':00', '')}</div>);
  }

  const resourceHeaderTemplate = (props: any) => {
    return (
      <div className="resource-header-template-wrap">
        <div className="resource-detail">
          <div className="resource-name">{getDoctorName(props)}</div>
          <div className="resource-designation">{getDoctorLevel(props)}</div>
        </div>
      </div>
    );
  }

  const headerTooltipCustoizedTemplate = (props: any) => {
    return (<div className="template-wrap">
      <div className="room-name">{getRoomName(props)}</div>
    </div>
    );
  }

  const dateHeaderTemplate = (props: { date: Date; }) => {
    return (
      <Fragment>
        <div>{getDateHeaderDay(props.date)}</div>
        <div>{getDateHeaderDate(props.date)}</div>
        <div className="date-text">
          {props.date ? <div dangerouslySetInnerHTML={{ __html: getWeather(props.date) }} /> : null}
        </div>
      </Fragment>
    );
  }

  const getCellContent = (date: Date) => {
    if (date.getMonth() === 2 && date.getDate() === 4) {
      return `<img src="${LabourDayMonth}" alt="Labor Day" class="event-type-icon" /><div className="caption">Labor Day</div>`;
    } else if (date.getMonth() === 7 && date.getDate() === 9) {
      return `<img src="${HalloweenMonth}" alt="Halloween" class="event-type-icon" /><div className="caption">Halloween</div>`;
    } else if (date.getMonth() === 7 && date.getDate() === 16) {
      return `<img src="${IndependenceDayMonth}" alt="Independence Day" class="event-type-icon" /><div className="caption">Independence Day</div>`;
    } else if (date.getMonth() === 3 && date.getDate() === 1) {
      return `<img src="${PresidentsDayMonth}" alt="Presidents Day" class="event-type-icon" /><div className="caption">Presidents Day</div>`;
    } else if (date.getMonth() === 3 && date.getDate() === 2) {
      return `<img src="${EidAlFitrMonth}" alt="Eid Al Fitr" class="event-type-icon" /><div className="caption">Eid Al Fitr</div>`;
    } else if (date.getMonth() === 3 && date.getDate() === 18) {
      return `<img src="${GoodFridayMonth}" alt="Good Friday" class="event-type-icon" /><div className="caption">Good Friday</div>`;
    } else if (date.getMonth() === 10 && date.getDate() === 27) {
      return `<img src="${ThanksGivingMonth}" alt="Thanks Giving" class="event-type-icon" /><div className="caption">Thanks Giving</div>`;
    } else if (date.getFullYear() === 2026 && date.getMonth() === 0 && date.getDate() === 1) {
      return `<img src="${NewYearMonth}" alt="New Year" class="event-type-icon" /><div className="caption">New Year</div>`;
    } else if (date.getMonth() === 11 && date.getDate() === 25) {
      return `<img src="${ChristmasMonth}" alt="Christmas" class="event-type-icon" /><div className="caption">Christmas</div>`;
    } else if (date.getMonth() === 9 && date.getDate() === 20) {
      return `<img src="${EasterDayMonth}" alt="Easter Day" class="event-type-icon" /><div className="caption">Easter Day</div>`;
    } else if (date.getMonth() === 4 && date.getDate() === 12) {
      return `<img src="${MemorialDayMonth}" alt="Memorial Day" class="event-type-icon" /><div className="caption">Memorial Day</div>`;
    } else if (date.getMonth() === 3 && date.getDate() === 11) {
      return `<img src="${MartinLutherKingDayMonth}" alt="Martin Luther King Day" class="event-type-icon" /><div className="caption">Martin Luther King Day</div>`;
    } else {
      return '';
    }
  }

  const onNavigating = (args: NavigatingEventArgs) => {
    if (isDateHeaderClicked && (checkboxStates['celltemplate'] || checkboxStates['eventtemplate'])) {
      scheduleObj.current.selectedDate = new Date(datePickerValues['selecteddate']);
      args.cancel = true;
    } else if (isDateHeaderClicked) {
      if (!isNullOrUndefined(args.currentView) && (args.currentView !== scheduleObj.current.currentView)) {
        scheduleObj.current.currentView = args.currentView as View;
        currentViewRef.current = args.currentView as View;
        if (viewDropdownRef.current) {
          viewDropdownRef.current.value = args.currentView;
        }
      }
      if (args.currentDate !== new Date(datePickerValues['selecteddate'])) {
        datePickerValues['selecteddate'] = scheduleObj.current.selectedDate.toISOString();
        // Update datePickerValues state using the same pattern as your other state updates
        setDatePickerValues((prevState) => {
          const newState = {
            ...prevState,
            selecteddate: scheduleObj.current.selectedDate.toISOString()
          };
          return newState;
        });
      }
    } else if (isDateNavigationClicked) {
      if (args.currentDate !== new Date(datePickerValues['selecteddate'])) {
        datePickerValues['selecteddate'] = args.currentDate.toISOString();
        // Update datePickerValues state using the same pattern as your other state updates
        setDatePickerValues((prevState) => {
          const newState = {
            ...prevState,
            selecteddate: args.currentDate.toISOString()
          };
          return newState;
        });
      }
    }
    isDateHeaderClicked = false;
  }

  const onActionComplete = (args: ActionEventArgs) => {
    const timelineViews = new Set(["TimelineDay", "TimelineMonth", "TimelineWeek", "TimelineWorkWeek"]);
    if ((args.requestType === "viewNavigate" || args.requestType === 'dateNavigate') && timelineViews.has(scheduleObj.current?.currentView || "")) {
      setTimeout(() => scheduleObj.current?.refreshLayout(), 50);
    }
    if (args.requestType === 'eventCreated' && args.data) {
      if (Array.isArray(scheduleObj.current.eventSettings.dataSource) && scheduleObj.current.eventSettings.dataSource.length !== dataSource.calendarData.length) {
        let eventData: Record<string, any> | undefined;
        if (Array.isArray(args.data)) {
          eventData = args.data[0] as Record<string, any>;
        } else {
          eventData = args.data as Record<string, any>;
        }
        dataSource.calendarData.push(eventData);
      }
    }
  }

  const cellTemplate = (props: CellTemplateArgs) => {
    const currentView = scheduleObj.current?.currentView;
    const isMonthView = currentView === 'Month';
    if (props.type === "monthCells" && isMonthView) {
      return (
        <div className="templatewrap">
          {props.date ? <div dangerouslySetInnerHTML={{ __html: getCellContent(props.date) }} /> : null}
        </div>
      );
    }
    return;
  }

  // Birthday event template function
  const birthdayEventTemplate = (props: EventProps, isMonthView: boolean) => {
    // Check if this is a birthday event (CalendarId 3)
    if (isMonthView) {
      // Get SVG icon
      const svgIcon = calendarSvgIcons[props.EventType] || '';
      return (
        <div className="birthday-event" style={{ backgroundColor: '#C2185B' }}>
          <div className="birthday-icon">
            {svgIcon ? <div dangerouslySetInnerHTML={{ __html: svgIcon }} /> : null}
          </div>
          <div className="birthday-content">
            <div className="birthday-subject">{props.Subject}</div>
          </div>
        </div>
      );
    }
  };

  // Personal event template function
  const personalEventTemplate = (props: EventProps, isMonthView: boolean) => {
    // Check if this is a Personal event (CalendarId 1)
    const svgIcon = calendarSvgIcons[props.EventType] || '';
    if (isMonthView) {
      return (
        <div className="personal-event" style={{ backgroundColor: '#7B1FA2' }}>
          <div className="personal-icon">
            {svgIcon ? <div dangerouslySetInnerHTML={{ __html: svgIcon }} /> : null}
          </div>
          <div className="personal-content">
            <div className="personal-subject">{props.Subject}</div>
          </div>
        </div>
      );
    }
  };

  // Company event template function
  const companyEventTemplate = (props: EventProps, isMonthView: boolean) => {
    // Check if this is a company event (CalendarId 2)
    if (isMonthView) {
      // Get SVG icon
      const svgIcon = calendarSvgIcons[props.EventType] || '';
      return (
        <div className="company-event-container">
          <div className="company-event-content">
            <div className="company-event-icon">
              {svgIcon ? <div dangerouslySetInnerHTML={{ __html: svgIcon }} /> : null}
            </div>
            <div className="company-event-text">{props.Subject}</div>
          </div>
        </div>
      );
    }
  };

  const eventTemplate = (props: EventProps) => {
    // Get the current view from the scheduler instance
    const currentView = scheduleObj.current?.currentView;
    const isMonthView = currentView === 'Month';
    if (props.CalendarId === 1) {
      return personalEventTemplate(props, isMonthView);
    } else if (props.CalendarId === 2) {
      return companyEventTemplate(props, isMonthView);
    } else if (props.CalendarId === 3) {
      return birthdayEventTemplate(props, isMonthView);
    }
  }

  const onEventClick = (args: EventClickArgs) => {
    if (checkboxStates['quickinfotemplate']) {
      let popupInstance = (document.querySelector(".e-quick-popup-wrapper") as EJ2Instance).ej2_instances[0];
      popupInstance.open = () => {
        popupInstance.refreshPosition();
      };
    }
  }

  const onResizeStart = (args: ResizeEventArgs) => {
    // Check if the user is on a Mac
    const isMac = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
    // Apply preventDefault only on Mac devices
    if (isMac) {
      args.event.preventDefault();
    }
  }

  const eventRenderedEvent = (args: EventRenderedArgs) => {
    // Get the current view from the scheduler instance
    const currentView = scheduleObj.current?.currentView;
    const isMonthView = currentView === 'Month';
    // First check if headerrows or headerrowstemplate is enabled
    if (!isMonthView && (checkboxStates['headerrow'] || checkboxStates['headerrowstemplate'])) {
      // Skip customization when it's not Month view AND (headerrow OR headerrowstemplate is enabled)
      return;
    }

    let backgroundColor: string = args.data.MonthColor;
    let color: string = args.data.MonthFontColor;
    if (args.data.IsAllDay && checkboxStates['eventtemplate']) {
      let leftIndicatorElement: HTMLElement = args.element.querySelector('.e-indicator.e-icons.e-left-icon') as HTMLElement;
      let rightIndicatorElement: HTMLElement = args.element.querySelector('.e-indicator.e-icons.e-right-icon') as HTMLElement;
      if (leftIndicatorElement) {
        leftIndicatorElement.style.backgroundColor = backgroundColor;
      }
      if (rightIndicatorElement) {
        rightIndicatorElement.style.backgroundColor = backgroundColor;
      }
    }
    if (args.data.RecurrenceRule && checkboxStates['eventtemplate']) {
      let recurrenceIconElement: HTMLElement = args.element.querySelector('.e-icons.e-recurrence-icon') as HTMLElement;
      if (recurrenceIconElement) {
        recurrenceIconElement.style.backgroundColor = backgroundColor;
        recurrenceIconElement.style.color = color;
      }
    }
  }

  const getDateHeaderDay = (value: Date): string => {
    return intl.formatDate(value, { skeleton: 'E' });
  }
  const getDateHeaderDate = (value: Date): string => {
    return intl.formatDate(value, { skeleton: 'd' });
  }
  const getWeather = (value: Date): string => {
    switch (value.getDay()) {
      case 0:
        return '<img class="weather-image"  src= "https://ej2.syncfusion.com/react/demos/src/schedule/images/weather-clear.svg" alt="Clear Weather"/>';
      case 1:
        return '<img class="weather-image" src="https://ej2.syncfusion.com/react/demos/src/schedule/images/weather-clouds.svg" alt="Clouds Weather"/>';
      case 2:
        return '<img class="weather-image" src="https://ej2.syncfusion.com/react/demos/src/schedule/images/weather-rain.svg" alt="Rain Weather"/>';
      case 3:
        return '<img class="weather-image" src="https://ej2.syncfusion.com/react/demos/src/schedule/images/weather-clouds.svg" alt="Clouds Weather"/>';
      case 4:
        return '<img class="weather-image" src="https://ej2.syncfusion.com/react/demos/src/schedule/images/weather-rain.svg" alt="Rain Weather"/>';
      case 5:
        return '<img class="weather-image" src="https://ej2.syncfusion.com/react/demos/src/schedule/images/weather-clear.svg" alt="Clear Weather"/>';
      case 6:
        return '<img class="weather-image" src="https://ej2.syncfusion.com/react/demos/src/schedule/images/weather-clouds.svg" alt="Clouds Weather"/>';
      default:
        return '';
    }
  }

  const getRoomName = (value: ResourceDetails) => {
    const resource = (value as ResourceDetails).resource;
    return resource && resource.textField ? (value as ResourceDetails).resourceData[resource.textField] : '';
  }

  const getDoctorName = (value: ResourceDetails | TreeViewArgs): string => {
    if ("resourceData" in value && "resource" in value) {
      return value.resource?.textField ? value.resourceData[value.resource.textField] as string : "";
    }
    return "resourceName" in value ? value.resourceName || "" : "";
  }

  const getDoctorLevel = (value: ResourceDetails | TreeViewArgs): string => {
    let resourceName: string = getDoctorName(value);
    return (resourceName === 'My Calendar') ? 'Personal' : (resourceName === 'Company') ? 'Office' : (resourceName === 'Birthday') ? 'Birthday Celebration' : '';
  }

  const toolTipCustomizedTemplate = useCallback((props: any) => {
    return (
      <div className="tooltip-wrap">
        <div className={"image " + props.EventType}></div>
        <div className="content-area"><div className="event-name">{props.Subject}</div>
          <div className="time">From&nbsp;:&nbsp;{props.StartTime.toLocaleString()}</div>
          <div className="time">To&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;{props.EndTime.toLocaleString()}</div>
        </div>
      </div>
    );
  }, [])

  // Custom template for items
  const categoryItemTemplate = (data: any) => {
    return (
      <div className="e-resource-template">
        <div className="e-resource-color" style={{ backgroundColor: data.CategoryColor, marginTop: 0 }}></div>
        <div className="e-resource-text">{data.CategoryText}</div>
      </div>
    );
  };

  const calendarItemTemplate = (data: any) => {
    return (
      <div className="e-calendar-resource-template">
        <div className="e-calendar-resource-color" style={{ backgroundColor: data.CalendarColor }}></div>
        <div className="e-calendar-resource-text">{data.CalendarText}</div>
      </div>
    );
  };

  const editorTemplate = (props: any) => {
    // Check if scheduler is in read-only mode
    const isRtlMode = scheduleObj.current?.enableRtl || false;
    // Create a ref to track the selected calendar
    const selectedCalendarRef = useRef(props.CalendarId || 1);

    // Function to filter categories based on the selected calendar
    const getFilteredCategories = () => {
      return categoriesData.filter(category => category.GroupId === selectedCalendarRef.current);
    };

    // Handle calendar change
    const handleCalendarChange = (e: any) => {
      selectedCalendarRef.current = e.value;
      // Get the category multiselect component and update its dataSource
      const categoryMultiSelect = categoryMultiSelectRef.current;
      if (categoryMultiSelect) {
        categoryMultiSelect.dataSource = getFilteredCategories();
        categoryMultiSelect.value = []; // Clear selection when calendar changes
        if (selectedCalendarRef.current === 1) {
          categoryMultiSelect.value = [1];
        } else if (selectedCalendarRef.current === 2) {
          categoryMultiSelect.value = [6];
        } else if (selectedCalendarRef.current === 3) {
          categoryMultiSelect.value = [14];
        }
      }
    };
    return (props !== undefined && Object.keys(props).length > 0 ?
      <table className="custom-event-editor">
        <tbody>
          <tr>
            <td className="e-textlabel">Event Title</td>
            <td colSpan={4}>
              <input id="Subject" className="e-field e-input" type="text" name="Subject" style={{ width: '100%' }} placeholder="Add title" />
            </td>
          </tr>
          <tr>
            <td className="e-textlabel icon-calendar">Calendar</td>
            <td colSpan={4}>
              <DropDownListComponent id="CalendarId" enableRtl={isRtlMode} placeholder='Choose Calendar' data-name='CalendarId' className="e-field"
                style={{ width: '100%' }} fields={{ text: 'CalendarText', value: 'CalendarId' }}
                dataSource={calendarCollections} value={props.CalendarId} itemTemplate={calendarItemTemplate} change={handleCalendarChange} />
            </td>
          </tr>
          <tr>
            <td className="e-textlabel icon-category">Category</td>
            <td colSpan={4}>
              <MultiSelectComponent ref={categoryMultiSelectRef} id="CategoryId" enableRtl={isRtlMode} className="e-field" placeholder='Choose Categories' data-name="CategoryId"
                dataSource={getFilteredCategories()} fields={{ text: 'CategoryText', value: 'Id' }} value={props.CategoryId} itemTemplate={categoryItemTemplate} />
            </td>
          </tr>
          <tr>
            <td className="e-textlabel icon-time">Start Time</td>
            <td colSpan={4}>
              <DateTimePickerComponent enableRtl={isRtlMode} format='dd/MM/yy hh:mm a' id="StartTime" data-name="StartTime"
                value={new Date(props.startTime || props.StartTime)} className="e-field"></DateTimePickerComponent>
            </td>
          </tr>
          <tr>
            <td className="e-textlabel icon-time">End Time</td>
            <td colSpan={4}>
              <DateTimePickerComponent enableRtl={isRtlMode} format='dd/MM/yy hh:mm a' id="EndTime" data-name="EndTime"
                value={new Date(props.endTime || props.EndTime)} className="e-field"></DateTimePickerComponent>
            </td>
          </tr>
          <tr>
            <td className="e-textlabel icon-description">Description</td>
            <td colSpan={4}>
              <textarea id="Description" className="e-field e-input" name="Description" rows={3} cols={50}
                style={{ width: '100%', resize: 'vertical' }} placeholder="Add description"></textarea>
            </td>
          </tr>
        </tbody>
      </table>
      : <div></div>
    );
  }

  const editorHeaderTemplate = (props: any | undefined) => {
    return (
      <div id="event-header">
        {(props !== undefined) ?
          ((props.Subject) ? <div>{props.Subject}</div> : <div>CREATE NEW EVENT</div>)
          : <div>CREATE NEW EVENT</div>}
      </div>
    );
  };

  const editorFooterTemplate = (props: any | undefined) => {
    // Check if scheduler is in read-only mode
    const isRtlMode = scheduleObj.current?.enableRtl || false;
    // Get the current locale
    const currentLocale = localization.current || 'en-US';
    // Access the text directly from your locale object
    const saveButtonText = (Locale.getLocaleObj() as Record<string, any>)[currentLocale]?.schedule?.saveButton || 'Save';
    const cancelButtonText = (Locale.getLocaleObj() as Record<string, any>)[currentLocale]?.schedule?.cancelButton || 'Cancel';
    const deleteButtonText = (Locale.getLocaleObj() as Record<string, any>)[currentLocale]?.schedule?.deleteButton || 'Delete';
    // Check if we're editing an existing event (props will have data with ID greater than 0)
    const isExistingEvent = !!(props && props.Id && props.Id > 0);
    // Set justify-content style based on whether it's an existing event
    const footerStyle = {
      display: 'flex',
      justifyContent: isExistingEvent ? 'space-between' : 'flex-end',
      alignItems: 'center'
    };
    return (
      <div id="event-footer" style={footerStyle}>
        {isExistingEvent && (
          <div id="left-button">
            <ButtonComponent id="Delete" cssClass='e-primary' content={deleteButtonText} enableRtl={isRtlMode} />
          </div>
        )}
        <div id="right-button">
          <ButtonComponent id='Save' cssClass='e-primary' enableRtl={isRtlMode} content={saveButtonText}></ButtonComponent>
          <ButtonComponent id='Cancel' cssClass='e-primary' enableRtl={isRtlMode} content={cancelButtonText}></ButtonComponent>
        </div>
      </div>
    );
  }

  const getEventColor = (props: Record<string, any>, isLightVariant = false) => {
    // Get color based on calendar or category
    let color = '#9204EA'; // Default color

    if (props.CalendarId) {
      const calendar = calendarCollections.find(cal => cal.CalendarId === props.CalendarId);
      color = calendar ? calendar.CalendarColor : '#9204EA';
    } else if (props.CategoryId) {
      const category = categoriesData.find(cat => cat.Id === props.CategoryId);
      color = category ? category.CategoryColor : '#df5286';
    }

    // If light variant is requested, convert the color to a lighter version
    if (isLightVariant) {
      color = color.replace('#', '');
      const r = parseInt(color.substring(0, color.length / 3), 16);
      const g = parseInt(color.substring(color.length / 3, 2 * color.length / 3), 16);
      const b = parseInt(color.substring(2 * color.length / 3, 3 * color.length / 3), 16);
      return `rgba(${r}, ${g}, ${b}, 0.3)`; // Light variant with 0.3 opacity
    }

    return color;
  };

  const formatEventDate = (date: Date | string): string => {
    // Format date as "Thursday, Mar 13, 2025"
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
  };

  const headerTemplate = (props: Record<string, any>) => {
    // Check if scheduler is in read-only mode
    const isRtlMode = scheduleObj.current?.enableRtl || false;
    if (props.elementType === 'cell') {
      return (
        <div className="quick-info-header">
          <div className="quick-info-title">New Event</div>
          <div className="quick-info-close">
            <ButtonComponent cssClass='e-flat e-round e-small' iconCss='e-icons e-close' onClick={() => scheduleObj.current?.closeQuickInfoPopup()} enableRtl={isRtlMode} />
          </div>
        </div>
      );
    } else {
      // For event click - get the event color based on calendar or category
      const darkEventColor = getEventColor(props, false);
      const lightEventColor = getEventColor(props, true);
      const svgIcon = quickPopupCalendarSvgIcons[props.EventType] || '';
      return (
        <div className="quick-info-event-header">
          <div className="quick-info-close">
            <ButtonComponent cssClass='e-flat e-round e-small' iconCss='e-icons e-close' onClick={() => scheduleObj.current?.closeQuickInfoPopup()} enableRtl={isRtlMode} />
          </div>
          <div className="event-header-content" style={{ backgroundColor: lightEventColor, borderLeft: `6px solid ${darkEventColor}` }}>
            <div className="event-header-details">
              <div className="event-title">{props.Subject}</div>
              <div className="event-date">{formatEventDate(props.StartTime)}</div>
            </div>
            <div className="event-image">
              <div className="event-type-image">
                {svgIcon ? <div dangerouslySetInnerHTML={{ __html: svgIcon }} /> : null}
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  const contentTemplate = (props: Record<string, any>) => {
    // Check if scheduler is in read-only mode
    const isRtlMode = scheduleObj.current?.enableRtl || false;
    let value: number;
    let resourceDetails: ResourceDetails | undefined;

    if (props.elementType === 'cell') {
      value = parseInt(scheduleObj.current?.getSelectedCells()[0].getAttribute('data-group-index') ?? '0', 10);
      resourceDetails = scheduleObj.current?.getResourcesByIndex(value);

      // Create a ref to track the selected calendar
      const selectedQuickinfoCalendarRef = useRef(resourceDetails?.resourceData.GroupId || 1);

      // Function to filter categories based on the selected calendar
      const getFilteredCategories = () => {
        return categoriesData.filter(category => category.GroupId === selectedQuickinfoCalendarRef.current);
      };

      // Handle calendar change
      const handleCalendarChange = (e: ChangeEventArgs) => {
        selectedQuickinfoCalendarRef.current = e.value;

        // Get the category multiselect component and update its dataSource
        if (categoryTypeObj.current) {
          categoryTypeObj.current.dataSource = getFilteredCategories();
          categoryTypeObj.current.value = []; // Clear selection when calendar changes
          if (selectedQuickinfoCalendarRef.current === 1) {
            categoryTypeObj.current.value = [1];
          } else if (selectedQuickinfoCalendarRef.current === 2) {
            categoryTypeObj.current.value = [6];
          } else if (selectedQuickinfoCalendarRef.current === 3) {
            categoryTypeObj.current.value = [14];
          }
        }
      };
      return (
        <div className="quick-info-content">
          <div className="form-group">
            <label>Title</label>
            <TextBoxComponent width={'240px'} id="title" ref={titleObj} enableRtl={isRtlMode} />
          </div>
          <div className="form-group">
            <label>Calendar</label>
            <div className="e-dropdown-wrapper">
              <DropDownListComponent
                id="calendarType"
                width={'240px'}
                ref={calendarTypeObj}
                placeholder='Choose Calendar'
                data-name='CalendarId'
                fields={{ text: 'CalendarText', value: 'CalendarId' }}
                dataSource={calendarCollections}
                itemTemplate={calendarItemTemplate}
                enableRtl={isRtlMode}
                value={resourceDetails?.resourceData.GroupId ? resourceDetails.resourceData.GroupId : 1}
                change={handleCalendarChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label>Category</label>
            <div className="e-multiselect-wrapper">
              <MultiSelectComponent
                id="ownerType"
                width={'240px'}
                mode="Delimiter"
                ref={categoryTypeObj}
                placeholder='Choose Categories'
                data-name="CategoryId"
                dataSource={getFilteredCategories()}
                fields={{ text: 'CategoryText', value: 'Id' }}
                itemTemplate={categoryItemTemplate}
                enableRtl={isRtlMode}
                value={resourceDetails?.resourceData.Id ? [resourceDetails.resourceData.Id] : [1]}
              />
            </div>
          </div>
          <div className="form-group">
            <label>Description</label>
            <TextBoxComponent id="description" width={'240px'} ref={descriptionObj} enableRtl={isRtlMode} />
          </div>
        </div>
      );
    } else {
      // For event click - implementation would go here
      return (
        <div className="quick-info-event-content">
          <div className="event-content-grid">
            <div className="event-info-row">
              <div className="event-info-label">Subject</div>
              <div className="event-info-colon">:</div>
              <div className="event-info-value">{props.Subject}</div>
            </div>
            <div className="event-info-row">
              <div className="event-info-label">Calendar</div>
              <div className="event-info-colon">:</div>
              <div className="event-info-value">{getCalendarEventType(props)}</div>
            </div>
            <div className="event-info-row">
              <div className="event-info-label">Category</div>
              <div className="event-info-colon">:</div>
              <div className="event-info-value">{getCategoryEventType(props)}</div>
            </div>
            <div className="event-info-row">
              <div className="event-info-label">Description</div>
              <div className="event-info-colon">:</div>
              <div className="event-info-value">{props.Description}</div>
            </div>
          </div>
        </div>
      );
    }
  }

  const quickinfoFooterTemplate = (props: Record<string, any>) => {
    // Check if scheduler is in read-only mode
    const isReadOnly = scheduleObj.current?.readonly || false;
    // Check if scheduler is in read-only mode
    const isRtlMode = scheduleObj.current?.enableRtl || false;
    // Get the current locale
    const currentLocale = localization.current || 'en-US';
    // Access the text directly from your locale object
    const saveButtonText = (Locale.getLocaleObj() as Record<string, any>)[currentLocale]?.schedule?.saveButton || 'Save';
    const deleteButtonText = (Locale.getLocaleObj() as Record<string, any>)[currentLocale]?.schedule?.deleteButton || 'Delete';
    const moreDetailsButtonText = (Locale.getLocaleObj() as Record<string, any>)[currentLocale]?.schedule?.moreDetails || 'More Details';
    const editButtonText = (Locale.getLocaleObj() as Record<string, any>)[currentLocale]?.schedule?.edit || 'Edit';
    return (
      <div className="quick-info-footer">
        {props.elementType === "cell" ?
          <div className="cell-footer">
            <ButtonComponent id="more-details" cssClass='e-flat' content={moreDetailsButtonText} isPrimary={true} onClick={buttonClickActions} disabled={isReadOnly} enableRtl={isRtlMode} />
            <ButtonComponent id="save" cssClass='e-flat' content={saveButtonText} isPrimary={true} onClick={buttonClickActions} disabled={isReadOnly} enableRtl={isRtlMode} />
          </div>
          :
          <div className="event-footer">
            <ButtonComponent id="delete" cssClass='e-flat' content={deleteButtonText} isPrimary={true} onClick={buttonClickActions} disabled={isReadOnly} enableRtl={isRtlMode} />
            <ButtonComponent id="more-details" cssClass='e-flat' content={editButtonText} isPrimary={true} onClick={buttonClickActions} disabled={isReadOnly} enableRtl={isRtlMode} />
          </div>
        }
      </div>
    );
  }

  const getDateHeaderText = (props: { date: Date; }) => {
    return (<span className='e-day customized-date-text'>{instance.formatDate(props.date, { skeleton: "d" })}</span>);
  }

  const dayHeaderTemplate = (props: { date: Date; }) => {
    return (
      <div className="date-text">{instance.formatDate(props.date, { skeleton: 'E' })}</div>
    );
  }

  const monthHeaderTemplate = (props: { date: Date; }) => {
    return (
      <div className="date-text">{instance.formatDate(props.date, { skeleton: 'yMMM' })}</div>
    );
  }

  const getYearDetails = (value: CellTemplateArgs) => {
    return 'Year: ' + instance.formatDate((value as CellTemplateArgs).date, { skeleton: 'y' });
  }
  const getMonthDetails = (value: CellTemplateArgs) => {
    return 'Month: ' + instance.formatDate((value as CellTemplateArgs).date, { skeleton: 'M' });
  }
  const getWeekDetails = (value: CellTemplateArgs) => {
    return 'Week ' + getWeekNumber((getWeekLastDate((value as CellTemplateArgs).date, 0)));
  }
  const yearTemplate = (props: any) => {
    return (<span className="year">{getYearDetails(props)}</span>);
  }
  const monthTemplate = (props: any) => {
    return (<span className="month">{getMonthDetails(props)}</span>);
  }
  const weekTemplate = (props: any) => {
    return (<span className="week">{getWeekDetails(props)}</span>);
  }

  const getResourceData = (data: Record<string, any>): Record<string, any> => {
    // Get all resource collections
    const resources = scheduleObj.current?.getResourceCollections();
    if (!resources || resources.length === 0) {
      return {};
    }

    // Find the calendar resource (usually the first one)
    const calendarResource = resources.find(res => res.name === 'Calendars');
    // Find the category resource (usually the second one)
    const categoryResource = resources.find(res => res.name === 'Categories');

    // Get calendar data
    const calendarData = calendarResource ?
      (calendarResource.dataSource as Record<string, any>[])
        .find((resource: Record<string, any>) => resource.CalendarId === data.CalendarId) :
      null;

    // Get category data
    const categoryData = categoryResource ?
      (categoryResource.dataSource as Record<string, any>[])
        .find((resource: Record<string, any>) => resource.Id === data.CategoryId) :
      null;

    // Return combined data
    return {
      calendar: calendarData,
      category: categoryData
    };
  }

  const getCategoryEventType = (data: { [key: string]: string }): string => {
    return getResourceData(data).category?.CategoryText as string;
  }

  const getCalendarEventType = (data: { [key: string]: string }): string => {
    return getResourceData(data).calendar?.CalendarText as string;
  }

  const OnSelect = (args: SelectEventArgs) => {
    const selectedText = (args.data as { text: string })?.text || "Scheduler Settings";

    const result = scheduleParentProperties.find((item) => item.text.includes(selectedText));
    if (selectedItemRef.current && result) {
      selectedItemRef.current = result;
    }
    const listContent = document.getElementById("listContent");
    const newContent = renderCheckBoxGroup(selectedText);
    if (listContent && newContent) {
      if (!root) {
        root = createRoot(listContent); // Initialize only once
      }
      root.render(newContent); // Reuse existing root
    }
  };

  const onDropDownChange = (dropdownId: string | undefined, value: string): void => {
    setDropdownValues((prevState) => {
      const newState = {
        ...prevState,
        ...(dropdownId ? { [dropdownId]: value } : {})
      };
      // If the resource dropdown changes, update related fields
      if (dropdownId === 'resource' && value) {
        const resourceId = Number(value);
        updateResourceSettings(resourceId);
        // If we have saved settings for this resource, apply them
        if (resourceSettingsRef.current[resourceId]) {
          // Update multiselect value for workdays
          setMultiSelectValues(prev => ({
            ...prev,
            resourceworkdays: prev.resourceworkdays || []
          }));
          // Update timepicker values for work hours
          setTimePickerValues(prev => ({
            ...prev,
            'resourceworkhours-start': prev['resourceworkhours-start'] ?? parseTime('09:00'),
            'resourceworkhours-end': prev['resourceworkhours-end'] ?? parseTime('18:00')
          }));
        } else {
          // Default values if no settings exist for this resource
          setMultiSelectValues(prev => ({
            ...prev,
            resourceworkdays: [1, 2, 3, 4, 5]  // Default Mon-Fri
          }));

          setTimePickerValues(prev => ({
            ...prev,
            'resourceworkhours-start': parseTime('09:00'),
            'resourceworkhours-end': parseTime('18:00')
          }));
        }
      }
      return newState;
    });
  }

  const onDropdownViewChange = (args: ChangeEventArgs): void => {
    currentViewRef.current = args.value as View;

    if (scheduleObj.current) {
      // Set the view in the scheduler
      if (args.value === 'Horizontal TimelineYear') {
        scheduleObj.current.changeCurrentView('TimelineYear', 0);
      } else if (args.value === 'Vertical TimelineYear') {
        scheduleObj.current.changeCurrentView('TimelineYear', 1);
      } else {
        scheduleObj.current.currentView = args.value as View;
      }

      // Handle view-specific template and resizing/drag-drop dependencies
      if (args.value === 'Month' && checkboxStates['eventtemplate']) {
        let classElement = scheduleObj.current.element;
        classElement.classList.add('custom-month-event-template');
        scheduleObj.current.eventSettings.template = eventTemplate;

        // Disable resizing and drag/drop when event template is enabled in Month view
        scheduleObj.current.allowResizing = false;
        scheduleObj.current.allowDragAndDrop = false;

        // Update checkbox UI
        disableCheckbox('resizing');
        disableCheckbox('draganddrop');
      } else {
        storedResizingState.current = checkboxStates['resizing'];
        storedDragAndDropState.current = checkboxStates['draganddrop'];
        let classElement = scheduleObj.current.element;
        classElement.classList.remove('custom-month-event-template');
        scheduleObj.current.eventSettings.template = undefined;

        // Enable resizing and drag/drop for non-Month views or when event template is disabled
        scheduleObj.current.allowResizing = storedResizingState.current;
        scheduleObj.current.allowDragAndDrop = storedDragAndDropState.current;

        // Update checkbox UI
        enableCheckbox('resizing');
        enableCheckbox('draganddrop');

        // Restore checkbox states
        if (checkboxRefs.current['resizing']) {
          checkboxRefs.current['resizing'].checked = storedResizingState.current;
        }
        if (checkboxRefs.current['draganddrop']) {
          checkboxRefs.current['draganddrop'].checked = storedDragAndDropState.current;
        }
      }

      setTimeout(() => {
        scheduleObj.current?.refreshLayout();
      }, 50);
    }
  }

  const onMultiSelectChange = (fieldId: string, value: MultiSelectValue[] | null): void => {
    const values = value ? value.map(v => Number(v)).filter(n => !isNaN(n)) : [];
    setMultiSelectValues((prev) => {
      const newState: Record<string, MultiSelectValue[]> = {
        ...prev,
        [fieldId]: values
      };
      return newState;
    });
  }

  // Function to enable template mode
  const enableTemplateMode = (templateType: 'cell' | 'event') => {
    if (scheduleObj.current) {
      // Check if inline editing is enabled and disable it
      if (checkboxStates['allowinlineedting']) {
        // Store the current state to restore later if needed
        storedInlineEditingState.current = checkboxStates['allowinlineedting'];
        // Update checkbox states
        setCheckboxStates(prev => ({
          ...prev,
          'allowinlineedting': false
        }));
        // Apply to the scheduler
        scheduleObj.current.allowInline = false;
      }
      scheduleObj.current.currentView = 'Month';
      currentViewRef.current = 'Month';
      if (viewDropdownRef.current) {
        viewDropdownRef.current.value = 'Month';
      }
      // Clear resources and update UI state for resource grouping
      scheduleObj.current.group.resources = [];
      document.querySelector('.timeline-month')?.classList.add('e-hide');
      if (templateType === 'cell') {
        scheduleObj.current.cellTemplate = cellTemplate;
      } else {
        let classElement = scheduleObj.current.element;
        classElement.classList.add('custom-month-event-template');
        scheduleObj.current.eventSettings.template = eventTemplate;
      }
    }
    document.querySelector('.template-month')?.classList.remove('e-hide');
    document.querySelector('.view-dropdown')?.classList.add('e-hide');
  };

  // Function to disable template mode
  const disableTemplateMode = (templateType: 'cell' | 'event', isCellTemplateEnabled: boolean, isEventTemplateEnabled: boolean) => {
    if (scheduleObj.current) {
      if (templateType === 'cell') {
        (scheduleObj.current.cellTemplate as any) = undefined;
      } else {
        let classElement = scheduleObj.current?.element;
        classElement?.classList.remove('custom-month-event-template');
        scheduleObj.current.eventSettings.template = undefined;
      }
      // Only re-check inline editing if both templates are now disabled
      if (!isCellTemplateEnabled && !isEventTemplateEnabled) {
        // Re-enable the inline editing checkbox
        enableCheckbox('allowinlineedting');

        // Restore the previous state if it was enabled
        if (storedInlineEditingState.current) {
          if (checkboxRefs.current['allowinlineedting']) {
            checkboxRefs.current['allowinlineedting'].checked = true;
          }
          setCheckboxStates(prev => ({
            ...prev,
            'allowinlineedting': true
          }));

          if (scheduleObj.current) {
            scheduleObj.current.allowInline = true;
          }
        }
      }
    }
    // Only change visibility if both templates are disabled
    if (!isCellTemplateEnabled && !isEventTemplateEnabled) {
      document.querySelector('.view-dropdown')?.classList.remove('e-hide');
      document.querySelector('.template-month')?.classList.add('e-hide');
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Get the current selected category
    const selectedCategory = selectedItemRef.current?.text || "Scheduler Settings";
    // Update dropdown values
    setDropdownValues((prev) => {
      if (scheduleObj.current) {
        switch (selectedItemRef.current?.text) {
          case "Calendar Settings":
            scheduleObj.current.calendarMode = prev['calendarmode'] as CalendarType;
            scheduleObj.current.firstDayOfWeek = Number(prev['firstdayofweek']);
            scheduleObj.current.weekRule = prev['weekrule'] as WeekRule;
            scheduleObj.current.timezone = prev['timezone'] as string;
            scheduleObj.current.dateFormat = prev['dateformat'] ? String(prev['dateformat']) : undefined;
            scheduleObj.current.firstMonthOfYear = prev['firstmonthofyear'] as number;
            break;

          case "Event Settings":
            scheduleObj.current.eventSettings.resourceColorField = prev['resourcecolorfield'] as string;
            scheduleObj.current.eventSettings.spannedEventPlacement = prev['spannedeventplacement'] as SpannedEventPlacement;
            break;

          case "Timescale Settings":
            scheduleObj.current.timeFormat = String(prev['timeformat']);
            scheduleObj.current.timeScale.interval = Number(prev['slotinterval']);
            scheduleObj.current.timeScale.slotCount = Number(prev['slotcount']);
            break;

          case "Resource Settings":
            if (prev['scrolltoresource']) {
              setTimeout(() => {
                scheduleObj.current.scrollToResource(prev['scrolltoresource'], 'Calendars'); // Perform the actio after the resource group is enabled. Since properties are enabled simlutaneously, we need to wait for a while
              }, 500);
            }
            break;

          case "Web Standards":
            if (prev['themes']) {
              const path: string = 'https://cdn.syncfusion.com/ej2/30.1.37/' + prev['themes'] + '.css';
              const primaryThemeLink: HTMLLinkElement = document.querySelector('.theme-primary') as HTMLLinkElement;
              const body: HTMLElement = document.body;
              primaryThemeLink.href = path.toString();
              if (theme.current) {
                body.classList.remove(theme.current);
              }
              body.classList.add(prev['themes'] as string);
              theme.current = prev['themes'] as string;
            }

            if (prev['localization']) {
              localization.current = prev['localization'] as string;
              setCulture(prev['localization'] as string);
              if (localization.current === 'ar') {
                ChangeRtl(true);
              } else {
                ChangeRtl(false);
              }
            }

            if (prev['interactiontypes'] === 'Mouse') {
              document.body.classList.remove('e-bigger');
            } else {
              document.body.classList.add('e-bigger');
            }
            break;
        }
      }

      // Keep the state updated
      Object.keys(dropdownValues).forEach((prop) => {
        dropdownValues[prop] = prev[prop];
      });

      return { ...prev };
    });

    // Update checkbox states
    setCheckboxStates((prev) => {
      if (scheduleObj.current) {
        // Process based on the selected category
        switch (selectedCategory) {
          case "Scheduler Settings":
            if (scheduleObj.current) {
              // General Settings
              scheduleObj.current.readonly = prev['readonlyschedule'];
              scheduleObj.current.allowResizing = prev['resizing'];
              scheduleObj.current.showTimeIndicator = prev['timeindicator'];
              scheduleObj.current.showQuickInfo = prev['quickinfo'];
              scheduleObj.current.quickInfoOnSelectionEnd = prev['quickinfoonselectionend'];
              newEventObj.current.disabled = prev['readonlyschedule'];
            }

            // Header Settings
            if (prev['headerrow']) {
              if (scheduleObj.current) {
                scheduleObj.current.headerRows = headerRowsConfigRef.current;
                // Disable event template when headerrows or headerrowstemplate is enabled
                scheduleObj.current.eventSettings.template = undefined;
                scheduleObj.current.group.resources = [];
                // Only headerrow is true
                scheduleObj.current.currentView = 'TimelineWeek';
                currentViewRef.current = 'TimelineWeek';
                if (viewDropdownRef.current) {
                  viewDropdownRef.current.value = 'TimelineWeek';
                }
                let classElement = scheduleObj.current.element;
                classElement.classList.remove('custom-month-event-template');
                document.querySelector('.view-dropdown')?.classList.remove('e-hide');
                document.querySelector('.template-month')?.classList.add('e-hide');
                document.querySelector('.timeline-month')?.classList.add('e-hide');
              }
            } else {
              if (scheduleObj.current) {
                scheduleObj.current.headerRows = [];
                // Now apply event template if it's enabled (only when headerrows are not enabled)
                if (prev['eventtemplate']) {
                  let classElement = scheduleObj.current.element;
                  classElement.classList.add('custom-month-event-template');
                  scheduleObj.current.eventSettings.template = eventTemplate;
                  scheduleObj.current.currentView = 'Month';
                  currentViewRef.current = 'Month';
                  if (viewDropdownRef.current) {
                    viewDropdownRef.current.value = 'Month';
                  }
                  document.querySelector('.template-month')?.classList.remove('e-hide');
                  document.querySelector('.view-dropdown')?.classList.add('e-hide');
                }
              }
            }
            if (scheduleObj.current) {
              scheduleObj.current.enableAllDayScroll = prev['alldayscroll'];
            }
            if (prev['dateheader']) {
              if (scheduleObj.current) {
                scheduleObj.current.dateHeaderTemplate = dateHeaderTemplate;
              }
            } else {
              if (scheduleObj.current) {
                (scheduleObj.current.dateHeaderTemplate as any) = undefined;
              }
            }

            if (scheduleObj.current) {
              // Row Settings
              scheduleObj.current.rowAutoHeight = prev['rowautoheight'];
              scheduleObj.current.eventSettings.ignoreWhitespace = prev['ignorewhitespace'];

              // Selection Settings
              scheduleObj.current.allowMultiCellSelection = prev['multicellselection'];
              scheduleObj.current.allowMultiRowSelection = prev['multirowselection'];

              // Drag and Drop Settings
              scheduleObj.current.allowDragAndDrop = prev['draganddrop'];
              scheduleObj.current.allowMultiDrag = prev['multidrag'];
              scheduleObj.current.enableRecurrenceValidation = prev['recurrencevalidation'];

              // Agenda Settings
              scheduleObj.current.hideEmptyAgendaDays = prev['hideemptyagendadays'];
            }
            break;

          case "Calendar Settings":
            if (scheduleObj.current) {
              // General Settings
              scheduleObj.current.showWeekend = prev['showweekend'];
              scheduleObj.current.showWeekNumber = prev['showweeknumbers'];
            }
            break;

          case "Event Settings":
            if (scheduleObj.current) {
              // General Settings
              scheduleObj.current.eventSettings.enableMaxHeight = prev['enablemaxheight'];
              scheduleObj.current.eventSettings.enableIndicator = prev['enableindicator'];
              scheduleObj.current.eventSettings.enableTooltip = prev['enabletooltip'];

              // CRUD Settings
              scheduleObj.current.eventSettings.allowAdding = prev['allowadding'];
              scheduleObj.current.eventSettings.allowDeleting = prev['allowdeleting'];
              scheduleObj.current.eventSettings.allowEditing = prev['allowediting'];
              scheduleObj.current.eventSettings.editFollowingEvents = prev['editfollowingevents'] ?? false;
              scheduleObj.current.allowInline = prev['allowinlineedting'];
            }
            break;

          case "Resource Settings":
            // General Settings
            if (prev['enablegrouping']) {
              if (scheduleObj.current) {
                scheduleObj.current.group.resources = ['Calendars', 'Categories'];
                // Disable event template when grouping is enabled
                scheduleObj.current.eventSettings.template = undefined;
                scheduleObj.current.currentView = 'TimelineMonth';
                currentViewRef.current = 'TimelineMonth';
                if (viewDropdownRef.current) {
                  viewDropdownRef.current.value = 'TimelineMonth';
                }
                document.querySelector('.timeline-month')?.classList.remove('e-hide');
                if (prev['eventtemplate']) {
                  let classElement = scheduleObj.current.element;
                  classElement.classList.remove('custom-month-event-template');
                  document.querySelector('.template-month')?.classList.add('e-hide');
                }
                document.querySelector('.view-dropdown')?.classList.add('e-hide');
              }
            } else {
              if (scheduleObj.current) {
                scheduleObj.current.group.resources = [];
                scheduleObj.current.currentView = 'Month';
                currentViewRef.current = 'Month';
                if (viewDropdownRef.current) {
                  viewDropdownRef.current.value = 'Month';
                }
                if (prev['eventtemplate']) {
                  let classElement = scheduleObj.current.element;
                  classElement.classList.add('custom-month-event-template');
                  scheduleObj.current.eventSettings.template = eventTemplate;
                  document.querySelector('.template-month')?.classList.remove('e-hide');
                } else {
                  document.querySelector('.view-dropdown')?.classList.remove('e-hide');
                }
                document.querySelector('.timeline-month')?.classList.add('e-hide');
              }
            }

            scheduleObj.current.group.allowGroupEdit = prev['allowgroupedit'];
            break;

          case "Timescale Settings":
            if (scheduleObj.current) {
              // General Settings
              scheduleObj.current.timeScale.enable = prev['enabletimescale'];
              scheduleObj.current.timeScale.majorSlotTemplate = prev['majorslottemplate'] ? majorSlotTemplate : undefined;
              scheduleObj.current.timeScale.minorSlotTemplate = prev['minorslottemplate'] ? minorSlotTemplate : undefined;
            }
            break;

          case "Template Settings":
            // Month View Templates
            if (prev['celltemplate']) {
              enableTemplateMode('cell');
            } else {
              disableTemplateMode('cell', prev['celltemplate'], prev['eventtemplate']);
            }

            if (prev['eventtemplate']) {
              enableTemplateMode('event');
            } else {
              disableTemplateMode('event', prev['celltemplate'], prev['eventtemplate']);
            }

            // Year View Templates
            if (prev['cellheadertemplate']) {
              if (scheduleObj.current) {
                scheduleObj.current.cellHeaderTemplate = getDateHeaderText;
              }
            } else {
              if (scheduleObj.current) {
                (scheduleObj.current.cellHeaderTemplate as any) = undefined;
              }
            }

            if (prev['dayheadertemplate']) {
              if (scheduleObj.current) {
                scheduleObj.current.dayHeaderTemplate = dayHeaderTemplate;
              }
            } else {
              if (scheduleObj.current) {
                (scheduleObj.current.dayHeaderTemplate as any) = undefined;
              }
            }

            if (prev['monthheadertemplate']) {
              if (scheduleObj.current) {
                scheduleObj.current.monthHeaderTemplate = monthHeaderTemplate;
              }
            } else {
              if (scheduleObj.current) {
                (scheduleObj.current.monthHeaderTemplate as any) = undefined;
              }
            }

            // Timeline View Templates
            if (prev['headerrowstemplate']) {
              if (scheduleObj.current) {
                scheduleObj.current.headerRows = [
                  { option: 'Year', template: yearTemplate },
                  { option: 'Month', template: monthTemplate },
                  { option: 'Week', template: weekTemplate },
                  { option: 'Date' },
                  { option: 'Hour' }
                ];
                // Disable event template when headerrows or headerrowstemplate is enabled
                scheduleObj.current.eventSettings.template = undefined;
                let classElement = scheduleObj.current.element;
                classElement.classList.remove('custom-month-event-template');
                document.querySelector('.view-dropdown')?.classList.remove('e-hide');
                document.querySelector('.template-month')?.classList.add('e-hide');
                document.querySelector('.timeline-month')?.classList.add('e-hide');
                scheduleObj.current.group.resources = [];
                // headerrowstemplate takes precedence if both are true
                scheduleObj.current.currentView = 'TimelineMonth';
                currentViewRef.current = 'TimelineMonth';
                if (viewDropdownRef.current) {
                  viewDropdownRef.current.value = 'TimelineMonth';
                }
              }
            } else {
              if (scheduleObj.current) {
                scheduleObj.current.headerRows = [];
                // Now apply event template if it's enabled (only when headerrows are not enabled)
                if (prev['eventtemplate']) {
                  let classElement = scheduleObj.current.element;
                  classElement.classList.add('custom-month-event-template');
                  scheduleObj.current.eventSettings.template = eventTemplate;
                  scheduleObj.current.currentView = 'Month';
                  currentViewRef.current = 'Month';
                  if (viewDropdownRef.current) {
                    viewDropdownRef.current.value = 'Month';
                  }
                  document.querySelector('.template-month')?.classList.remove('e-hide');
                  document.querySelector('.view-dropdown')?.classList.add('e-hide');
                }
              }
            }

            // Popup Templates
            if (prev['editorheadertemplate']) {
              if (scheduleObj.current) {
                scheduleObj.current.editorHeaderTemplate = editorHeaderTemplate;
              }
            } else {
              if (scheduleObj.current) {
                (scheduleObj.current.editorHeaderTemplate as any) = undefined;
              }
            }

            if (prev['editorfootertemplate']) {
              if (scheduleObj.current) {
                scheduleObj.current.editorFooterTemplate = editorFooterTemplate;
              }
            } else {
              if (scheduleObj.current) {
                (scheduleObj.current.editorFooterTemplate as any) = undefined;
              }
            }

            if (prev['editortemplate']) {
              if (scheduleObj.current) {
                scheduleObj.current.editorTemplate = editorTemplate;
              }
            } else {
              if (scheduleObj.current) {
                (scheduleObj.current.editorTemplate as any) = undefined;
              }
            }

            if (prev['quickinfotemplate']) {
              if (scheduleObj.current) {
                scheduleObj.current.quickInfoTemplates = {
                  header: headerTemplate,
                  content: contentTemplate,
                  footer: quickinfoFooterTemplate
                };
              }
            } else {
              if (scheduleObj.current) {
                (scheduleObj.current.quickInfoTemplates.header as any) = undefined;
                (scheduleObj.current.quickInfoTemplates.content as any) = undefined;
                (scheduleObj.current.quickInfoTemplates.footer as any) = undefined;
              }
            }
            if (scheduleObj.current) {
              // Tooltip Template
              scheduleObj.current.eventSettings.tooltipTemplate = prev['tooltiptemplate'] ? toolTipCustomizedTemplate : undefined;
            }
            // Resource Template
            if (prev['resourceheader']) {
              if (scheduleObj.current) {
                scheduleObj.current.resourceHeaderTemplate = resourceHeaderTemplate;
              }
            } else {
              if (scheduleObj.current) {
                (scheduleObj.current.resourceHeaderTemplate as any) = undefined;
              }
            }
            break;

          case "Web Standards":
            if (scheduleObj.current) {
              // General
              scheduleObj.current.enableRtl = prev['rtl'] || (localization.current === 'ar');
            }
            break;
        }
      }

      // Keep the state updated
      Object.keys(checkboxStates).forEach((prop) => {
        checkboxStates[prop] = prev[prop];
      });

      return { ...prev };
    });

    // Update multiselect values
    setMultiSelectValues((prev) => {
      if (scheduleObj.current) {
        switch (selectedItemRef.current?.text) {
          case "Resource Settings":
            if (prev['expandedfield']) {
              setTimeout(() => {
                // Get all calendar IDs
                const allCalendarIds = calendarCollections.map(calendar => calendar.CalendarId);
                const selectedIds = prev['expandedfield'] as number[];
                // Apply the expand/collapse state based on the multiselect values
                allCalendarIds.forEach(id => {
                  if (selectedIds.includes(id)) {
                    scheduleObj.current?.expandResource(id, 'Calendars'); // Perform the actio after the resource group is enabled. Since properties are enabled simlutaneously, we need to wait for a while
                  } else {
                    scheduleObj.current?.collapseResource(id, 'Calendars'); // Perform the actio after the resource group is enabled. Since properties are enabled simlutaneously, we need to wait for a while
                  }
                });
              }, 100);
            }
            break;

          case "Calendar Settings":
            scheduleObj.current.workDays = prev['workdays'] as number[];
            break;
        }
      }

      // Keep the state updated
      Object.keys(multiSelectValues).forEach((prop) => {
        multiSelectValues[prop] = prev[prop];
      });

      return { ...prev };
    });

    // Update date picker values
    setDatePickerValues((prev) => {
      if (selectedItemRef.current?.text === "Calendar Settings" && scheduleObj.current) {
        if (prev['maxDatePicker'] < prev['minDatePicker']) {
          alert('Max date cannot be greater than end date');
          return prev;
        }
        scheduleObj.current.maxDate = prev['maxDatePicker'] ? new Date(prev['maxDatePicker']) : new Date(2099, 11, 31);
        scheduleObj.current.minDate = prev['minDatePicker'] ? new Date(prev['minDatePicker']) : new Date(1900, 0, 1);
        scheduleObj.current.selectedDate = new Date(prev['selecteddate'] ?? new Date());
      }

      // Keep the state updated
      Object.keys(datePickerValues).forEach((prop) => {
        datePickerValues[prop] = prev[prop];
      });
      if (prev['maxDatePicker']) {
        datePickerValues['maxDatePicker'] = prev['maxDatePicker'];
      }
      if (prev['minDatePicker']) {
        datePickerValues['minDatePicker'] = prev['minDatePicker'];
      }
      return { ...prev };
    });

    // Update time picker values
    setTimePickerValues((prev) => {
      if (selectedItemRef.current?.text === "Timescale Settings" && scheduleObj.current) {
        scheduleObj.current.startHour = formatTime(prev['starthour'] ?? new Date());
        scheduleObj.current.endHour = formatTime(prev['endhour'] ?? new Date());
        scheduleObj.current.workHours.start = formatTime(prev['workhours-start'] ?? new Date());
        scheduleObj.current.workHours.end = formatTime(prev['workhours-end'] ?? new Date());

        // Update work hours directly
        if (workStartTimePickerRef.current) {
          workStartTimePickerRef.current.value = prev['workhours-start'];
        }
        if (workEndTimePickerRef.current) {
          workEndTimePickerRef.current.value = prev['workhours-end'];
        }

        if (prev['scrollto']) {
          const date = new Date(prev['scrollto']);
          const timeFormatted = intl.formatDate(date, { skeleton: 'Hm' });
          scheduleObj.current.scrollTo(timeFormatted);
        }
      }

      // Keep the state updated
      Object.keys(timePickerValues).forEach((prop) => {
        timePickerValues[prop] = prev[prop];
      });

      return { ...prev };
    });

    // Update numeric textbox values
    setNumericTextboxValues((prev) => {
      if (scheduleObj.current) {
        switch (selectedItemRef.current?.text) {
          case "Scheduler Settings":
            scheduleObj.current.agendaDaysCount = prev['agendadayscount'] as number;
            break;

          case "Calendar Settings":
            if (prev['monthscount']) {
              scheduleObj.current.monthsCount = prev['monthscount'] as number;
            }
            break;
        }
      }

      // Keep the state updated
      Object.keys(numericTextboxValues).forEach((prop) => {
        numericTextboxValues[prop] = prev[prop];
      });

      return { ...prev };
    });
    if ((e.target as HTMLElement).id === 'save') {
      dialogObj.current?.hide();
    }
  };


  const onTimePickerChange = (timepickerId: string, value: Date | null): void => {
    setTimePickerValues((prevState) => {
      const newState = {
        ...prevState,
        ...(value && { [timepickerId]: value }) // Only add the key if value is not null
      };
      return newState;
    });
  }

  const onDatePickerChange = (datepickerId: string, value: string): void => {
    setDatePickerValues((prevState) => {
      const newState = {
        ...prevState,
        [datepickerId]: value
      };
      // If value is null (cleared), set to null/undefined in state
      if (value === null) {
        newState[datepickerId] = null;

        if (datepickerId === "max-maxmindate") {
          newState.maxDatePicker = null;
        }
        if (datepickerId === "min-maxmindate") {
          newState.minDatePicker = null;
        }
      } else {
        newState[datepickerId] = value;

        if (datepickerId === "max-maxmindate") {
          newState.maxDatePicker = value;
        }
        if (datepickerId === "min-maxmindate") {
          newState.minDatePicker = value;
        }
      }
      return newState;
    });
  }

  const onNumericTextboxChange = (numericTextboxId: string, value: number): void => {
    setNumericTextboxValues(prev => ({
      ...prev,
      [numericTextboxId]: value || 0
    }));
  }

  const buttonClickActions = (e: React.MouseEvent<HTMLButtonElement>) => {
    const quickPopup: HTMLElement = closest(e.target as HTMLElement, '.e-quick-popup-wrapper') as HTMLElement;
    const getSlotData: Function = (): Record<string, any> => {
      const addObj: Record<string, any> = {};
      addObj.Id = scheduleObj.current?.getEventMaxID();
      addObj.Subject = isNullOrUndefined(titleObj.current?.value) ? 'Add event title' : titleObj.current?.value;
      if (scheduleObj.current) {
        addObj.StartTime = new Date(scheduleObj.current.activeCellsData.startTime);
        addObj.EndTime = new Date(scheduleObj.current.activeCellsData.endTime);
        addObj.IsAllDay = scheduleObj.current.activeCellsData.isAllDay;
      }
      addObj.Description = isNullOrUndefined(descriptionObj.current?.value) ? 'Add description' : descriptionObj.current?.value;
      addObj.CalendarId = calendarTypeObj.current?.value;
      addObj.CategoryId = categoryTypeObj.current?.value;
      return addObj;
    };
    if ((e.target as HTMLElement).id === 'save') {
      const addObj: Record<string, any> = getSlotData();
      scheduleObj.current?.addEvent(addObj);
    } else if ((e.target as HTMLElement).id === 'delete') {
      const eventDetails: Record<string, any> = scheduleObj.current?.activeEventData.event as Record<string, any>;
      let currentAction: CurrentAction = 'Delete';
      if (eventDetails.RecurrenceRule) {
        currentAction = 'DeleteOccurrence';
      }
      scheduleObj.current?.deleteEvent(eventDetails, currentAction);
    } else {
      const isCellPopup: boolean = (quickPopup.firstElementChild as HTMLElement).classList.contains('e-cell-popup');
      const eventDetails: Record<string, any> = isCellPopup ? getSlotData() : scheduleObj.current?.activeEventData.event as Record<string, any>;
      let currentAction: CurrentAction = isCellPopup ? 'Add' : 'Save';
      if (eventDetails.RecurrenceRule) {
        currentAction = 'EditOccurrence';
      }
      scheduleObj.current?.openEditor(eventDetails, currentAction, true);
    }
    scheduleObj.current?.closeQuickInfoPopup();
  }

  const listTemplate = (data: any) => {
    return (<div id="sidebarList">
      <span className="text e-text-content" id={data.text} >{data.text}</span>
    </div>);
  };

  const exportComponent = () => {
    return (
      <div className='calendar-export'>
        <DropDownButtonComponent id='exportBtn' content='Export' cssClass='e-inherit' items={exportItems} select={onExportClick} />
      </div>
    );
  };

  const ChangeRtl = (isShow: boolean) => {
    const controlContent = document.getElementById("content-area");
    if (controlContent) {
      const elementList = selectAll(".e-control", controlContent);
      elementList.forEach((control) => {
        const eleInstance = (control as EJ2Instance).ej2_instances;
        if (eleInstance) {
          eleInstance.forEach((instance: any) => {
            instance.enableRtl = isShow;
          });
        }
      });
    }
    if (isShow) {
      document.querySelector('.feature-rich-schedule-content-area')?.classList.add('e-rtl');
    } else {
      document.querySelector('.feature-rich-schedule-content-area')?.classList.remove('e-rtl');
    }
  }

  const tooltipRefs = useRef<{ [key: string]: TooltipComponent | null }>({});

  const tooltipBeforeOpen = (args: BeforeOpenEventArgs) => {
    // Get target and find the label before the current exclamation-container
    const target = args.target as HTMLElement;
    if (!target) return;

    // Different approach to find the correct label
    let labelText = '';

    // Traverse up to find the container and then find the label inside
    const container = target.closest('div[class*="-label"]') || target.closest('div[class*="-with-label-container"]');

    if (container) {
      const labelElement = container.querySelector('label');
      if (labelElement) {
        labelText = labelElement.textContent || '';
      } else {
        // Try finding label from previous sibling for checkbox-with-label case
        const checkboxContent = container.querySelector('.checkbox-content');
        if (checkboxContent) {
          const label = checkboxContent.querySelector('.e-label');
          if (label) {
            labelText = label.textContent || '';
          }
        }
      }
    }

    // Clean up label text (trim whitespace)
    labelText = labelText.trim();

    // Get tooltip object and set content
    const tooltipObj = (document.getElementById('tooltip-component') as any)?.ej2_instances?.[0];
    if (tooltipObj && labelText) {
      //tooltipObj.content = getTooltipContent(labelText);
      tooltipRefs.current[labelText]!.content = getTooltipContent(labelText);
    }
  }

  const getTooltipContent = (label: string) => {
    return propertyDescription[label] || "No description available";
  };

  // Handle checkbox change
  const handleAccordionCheckboxChange = (categoryId: number, checked: boolean) => {
    if (checked) {
      if (!selectedCategories.current.includes(categoryId)) {
        selectedCategories.current = [...selectedCategories.current, categoryId];
      }
    } else {
      selectedCategories.current = selectedCategories.current.filter(id => id !== categoryId);
    }
    // Update scheduler resources
    updateSchedulerResources();
    // Filter events based on selected categories
    filterEventsByCategories();
  };

  // Add this new function to filter events
  const filterEventsByCategories = () => {
    if (scheduleObj.current) {
      // Only perform filtering if current data doesn't match what we want
      let currentEventCount = 0;
      if (Array.isArray(dataSource)) {
        currentEventCount = dataSource.length;
      } else if (dataSource instanceof DataManager) {
        // DataManager doesn't have a length property, but we can handle it
        // You might need to execute a query to get the count if needed
        currentEventCount = -1; // Use a sentinel value or implement async count
      }
      const allEvents = [...(dataSource as Record<string, any>).calendarData];
      // Filter events to only include those with CategoryId in selectedCategories
      const filteredEvents = allEvents.filter(event =>
        selectedCategories.current.includes(event.CategoryId)
      );
      // Only update if there's a change
      if (currentEventCount !== filteredEvents.length) {
        // Use batch updates if available
        scheduleObj.current.eventSettings.dataSource = filteredEvents;

        // Use requestAnimationFrame to smooth out rendering
        requestAnimationFrame(() => {
          scheduleObj.current?.refreshEvents();
        });
      }
    }
  };

  // Update scheduler resources based on selected categories
  const updateSchedulerResources = () => {
    if (scheduleObj.current) {
      const filteredCategories = categoriesData.filter(
        category => selectedCategories.current.includes(category.Id)
      );

      scheduleObj.current.setResourceCollections([
        {
          field: 'CalendarId',
          title: 'Calendar',
          name: 'Calendars',
          dataSource: calendarCollections,
          textField: 'CalendarText',
          idField: 'CalendarId',
          colorField: 'CalendarColor',
          expandedField: 'IsExpand'
        },
        {
          field: 'CategoryId',
          title: 'Category',
          name: 'Categories',
          dataSource: filteredCategories,
          textField: 'CategoryText',
          idField: 'Id',
          colorField: 'CategoryColor',
          groupIDField: "GroupId",
          allowMultiple: true
        }
      ]);
    }
  };

  // Get categories grouped by their GroupId
  const getCategoryGroups = () => {
    const groups: { [key: string]: any[] } = {};

    categoriesData.forEach(category => {
      const groupId = category.GroupId;
      if (!groups[groupId]) {
        groups[groupId] = [];
      }
      groups[groupId].push({
        ...category,
        isSelected: selectedCategories.current.includes(category.Id)
      });
    });

    return groups;
  };

  const renderCheckBoxGroup = (selectedItem: string) => {
    if (!selectedItem || !checkboxConfigurations || !(selectedItem in checkboxConfigurations)) {
      console.warn("Invalid selectedItem:", selectedItem);
      return null;
    }
    const checkboxes = checkboxConfigurations[selectedItem];
    return (
      <div className="settings-group">
        {checkboxes.map((item) => {
          if ('groupField' in item) {
            return (
              <TooltipComponent
                id="tooltip-component"
                ref={(t: any) => {
                  if (!t) return;

                  // Store references for each item in the current group
                  if (item && item.items && Array.isArray(item.items)) {
                    item.items.forEach((groupItem) => {
                      if (groupItem.label) {
                        tooltipRefs.current[groupItem.label] = t;
                      }
                    });
                  }
                }}
                key={item.groupField}
                target='.exclamation-container'
                windowCollision={true}
                mouseTrail={true}
                position='TopCenter'  // Changed to TopCenter for above positioning
                cssClass='tooltip-container'
                width='300px'
                beforeRender={tooltipBeforeOpen}>
                <div key={item.groupField} className="group-section">
                  <h4 className="group-header">{item.groupField}</h4>
                  {item.items.map((groupItem) => (
                    <div key={groupItem.id}>
                      {groupItem.type === "checkboxWithDropdown" ? (
                        <div className="checkbox-with-dropdown">
                          <div className='checkbox-with-label-container'>
                            <CheckBoxComponent
                              id={groupItem.id}
                              ref={(instance: any) => {
                                if (instance) {
                                  checkboxRefs.current[groupItem.id] = instance;
                                }
                              }}
                              cssClass={localization.current === 'ar' ? "checkbox-content e-rtl" : "checkbox-content"}
                              label={groupItem.label}
                              checked={checkboxStates[groupItem.id] ?? groupItem.defaultChecked}
                              created={() => checkboxCreated(groupItem.id, checkboxRefs.current)}
                              change={(e) => handleCheckboxChange(groupItem.id, e.checked, checkboxRefs.current)}
                            />
                            <div className="exclamation-container">
                              <span className="e-icons e-circle-info icon"></span>
                            </div>
                          </div>
                          <DropDownListComponent
                            cssClass="dropdown-checkbox"
                            id={groupItem.dropdownWithCheckboxId}
                            ref={(instance: any) => {
                              if (instance) {
                                dropdownRefs.current[groupItem.dropdownWithCheckboxId ?? ''] = instance;
                              }
                            }}
                            width={160}
                            popupHeight={80}
                            popupWidth={156}
                            placeholder={groupItem.label}
                            fields={groupItem.dropdownFields}
                            dataSource={groupItem.dropdownDataSource}
                            value={dropdownValues[groupItem.dropdownWithCheckboxId ?? '']}
                            created={() => dropdownCreated(groupItem.dropdownWithCheckboxId, dropdownRefs.current)}
                            change={(e) => onDropDownChange(groupItem.dropdownWithCheckboxId, e.value)}
                          />
                        </div>
                      ) : groupItem.type === "dropdown" ? (
                        <div className="dropdown-with-label">
                          <div className='dropdown-label'>
                            <label>{groupItem.label}</label>
                            <div className="exclamation-container">
                              <span className="e-icons e-circle-info icon"></span>
                            </div>
                          </div>
                          <DropDownListComponent ref={(instance: any) => {
                            if (instance) {
                              dropdownRefs.current[groupItem.id] = instance;
                            }
                          }} cssClass="dropdown-content" width={160} popupHeight={160} popupWidth={156} id={groupItem.id} placeholder={groupItem.label} fields={groupItem.dropdownFields} dataSource={groupItem.dropdownDataSource} value={dropdownValues[groupItem.id]} itemTemplate={groupItem.dropdownItemTemplate} valueTemplate={groupItem.dropdownValueTemplate} change={(e) => onDropDownChange(groupItem.id, e.value)} created={() => dropdownCreated(groupItem.id, dropdownRefs.current)} />
                        </div>
                      ) : groupItem.type === "timepicker" ? (
                        <div className="timepicker-with-label">
                          <div className='timepicker-label'>
                            <label>{groupItem.label}</label>
                            <div className="exclamation-container">
                              <span className="e-icons e-circle-info icon"></span>
                            </div>
                          </div>
                          <TimePickerComponent ref={(instance: any) => {
                            if (instance) {
                              timepickerRefs.current[groupItem.id] = instance;
                            }
                          }} cssClass="time-picker" width={160} id={groupItem.id} showClearButton={false} placeholder={groupItem.label} value={timePickerValues[groupItem.id] || parseTime('00:00')} change={(e) => onTimePickerChange(groupItem.id, e.value)} created={() => timepickerCreated(groupItem.id, timepickerRefs.current)} />
                        </div>
                      ) : groupItem.type === "multiselect" ? (
                        <div className="multiselect-with-label">
                          <div className='multiselect-label'>
                            <label>{groupItem.label}</label>
                            <div className="exclamation-container">
                              <span className="e-icons e-circle-info icon"></span>
                            </div>
                          </div>
                          <MultiSelectComponent ref={(instance: any) => {
                            if (instance) {
                              multiselectRefs.current[groupItem.id] = instance;
                            }
                          }} id={groupItem.id} cssClass="multiselect-content" width={160} popupHeight={240} popupWidth={156} mode="CheckBox" fields={groupItem.dropdownFields} dataSource={groupItem.dropdownDataSource} placeholder={groupItem.label} enableSelectionOrder={false} showClearButton={false} showDropDownIcon={true} value={multiSelectValues[groupItem.id] as number[] || []} showSelectAll={groupItem.multiselectShowSelectAll} change={(e) => onMultiSelectChange(groupItem.id, e.value as MultiSelectValue[])} created={() => multiselectCreated(groupItem.id, multiselectRefs.current)}>
                            <Inject services={[CheckBoxSelection]} />
                          </MultiSelectComponent>
                        </div>
                      ) : groupItem.type === "workHourTimepicker" ? (
                        <div className="workhour-with-timepicker-label">
                          <div className="workhour-label">
                            <label>{groupItem.label}</label>
                            <div className="exclamation-container">
                              <span className="e-icons e-circle-info icon"></span>
                            </div>
                          </div>
                          <div className="timepicker-container">
                            <div className="work-starthour-timepicker">
                              <TimePickerComponent ref={(instance: any) => {
                                if (instance) {
                                  timepickerRefs.current[`${groupItem.id}-start`] = instance;
                                }
                              }} id={`${groupItem.id}-start`} width={152} placeholder={groupItem.workStartHourLabel} value={timePickerValues[`${groupItem.id}-start`] || parseTime('00:00')} floatLabelType={groupItem.timePickerFloatLabelType} change={(e) => onTimePickerChange(`${groupItem.id}-start`, e.value)} created={() => workHourTimepickerCreated(`${groupItem.id}-start`, timepickerRefs.current)} />
                            </div>
                            <div className="work-endhour-timepicker">
                              <TimePickerComponent ref={(instance: any) => {
                                if (instance) {
                                  timepickerRefs.current[`${groupItem.id}-end`] = instance;
                                }
                              }} id={`${groupItem.id}-end`} width={152} placeholder={groupItem.workEndHourLabel} value={timePickerValues[`${groupItem.id}-end`] || parseTime('00:00')} floatLabelType={groupItem.timePickerFloatLabelType} change={(e) => onTimePickerChange(`${groupItem.id}-end`, e.value)} created={() => workHourTimepickerCreated(`${groupItem.id}-end`, timepickerRefs.current)} />
                            </div>
                          </div>
                        </div>
                      ) : groupItem.type === "maxMinDatepicker" ? (
                        <div className="max-min-with-datepicker-label">
                          <div className="maxmin-label">
                            <label>{groupItem.label}</label>
                            <div className="exclamation-container">
                              <span className="e-icons e-circle-info icon"></span>
                            </div>
                          </div>
                          <div className="datepicker-container">
                            <div className="max-datepicker">
                              <DatePickerComponent id={`max-${groupItem.id}`} width={152} placeholder={groupItem.maxDateLabel} value={datePickerValues['maxDatePicker'] ? new Date(datePickerValues['maxDatePicker']) : null} showClearButton={false} change={(e) => onDatePickerChange(`max-${groupItem.id}`, e.value)} floatLabelType={groupItem.timePickerFloatLabelType} />
                            </div>
                            <div className="min-datepicker">
                              <DatePickerComponent id={`min-${groupItem.id}`} width={152} placeholder={groupItem.minDateLabel} value={datePickerValues['minDatePicker'] ? new Date(datePickerValues['minDatePicker']) : null} showClearButton={false} change={(e) => onDatePickerChange(`min-${groupItem.id}`, e.value)} floatLabelType={groupItem.timePickerFloatLabelType} />
                            </div>
                          </div>
                        </div>
                      ) : groupItem.type === "datepicker" ? (
                        <div className="datepicker-with-label">
                          <div className="datepicker-label">
                            <label>{groupItem.label}</label>
                            <div className="exclamation-container">
                              <span className="e-icons e-circle-info icon"></span>
                            </div>
                          </div>
                          <DatePickerComponent cssClass="date-picker" width={160} id={groupItem.id} showClearButton={false} value={new Date(datePickerValues[groupItem.id])} change={(e) => onDatePickerChange(groupItem.id, e.value)} floatLabelType={groupItem.timePickerFloatLabelType} />
                        </div>
                      ) : groupItem.type === "numerictextbox" ? (
                        <div className="numerictextbox-with-label">
                          <div className="numerictextbox-label">
                            <label>{groupItem.label}</label>
                            <div className="exclamation-container">
                              <span className="e-icons e-circle-info icon"></span>
                            </div>
                          </div>
                          <NumericTextBoxComponent cssClass="numerictextbox-content" width={160} id={groupItem.id} format={groupItem.numericTextboxformat} placeholder={groupItem.label} value={numericTextboxValues[groupItem.id] || groupItem.numericTextboxvalue} min={groupItem.numericTextboxMin} max={groupItem.numericTextboxMax} change={(e) => onNumericTextboxChange(groupItem.id, e.value)} />
                        </div>
                      ) : groupItem.type === "button" ? (
                        <div className="button-with-label">
                          <div className="button-label">
                            <label>{groupItem.label}</label>
                            <div className="exclamation-container">
                              <span className="e-icons e-circle-info icon"></span>
                            </div>
                          </div>
                          <ButtonComponent cssClass='button-content' id={groupItem.id} content={groupItem.buttonContent} onClick={buttonClickActions} />
                        </div>
                      ) : groupItem.type === "separator" ? (
                        <div className="separator-line"></div>
                      ) : groupItem.type === "textbox" ? (
                        <div className="textbox-with-label">
                          <div className="textbox-label">
                            <label>{groupItem.label}</label>
                            <div className="exclamation-container">
                              <span className="e-icons e-circle-info icon"></span>
                            </div>
                          </div>
                          <TextBoxComponent id={groupItem.id} width={160} placeholder={groupItem.label}></TextBoxComponent>
                        </div>
                      ) : groupItem.type === "textboxButton" ? (
                        <div className="textbox-button-container">
                          <ButtonComponent id='clearbutton' title='Clear' type='button'>Clear Filter</ButtonComponent>
                          <ButtonComponent id='searchbutton' title='Search' type='button'>Search</ButtonComponent>
                        </div>
                      ) : (groupItem.type === "custom" && groupItem.template) ? (
                        (groupItem.template)
                      ) : (
                        <div className='checkbox-with-label'>
                          <CheckBoxComponent
                            id={groupItem.id}
                            ref={(instance: any) => {
                              if (instance) {
                                checkboxRefs.current[groupItem.id] = instance;
                              }
                            }}
                            cssClass={localization.current === 'ar' ? "e-group-checkbox e-rtl" : "e-group-checkbox"}
                            label={groupItem.label}
                            checked={checkboxStates[groupItem.id] ?? groupItem.defaultChecked}
                            created={() => checkboxCreated(groupItem.id, checkboxRefs.current)}
                            change={(e) => handleCheckboxChange(groupItem.id, e.checked, checkboxRefs.current)}
                          />
                          <div className="exclamation-container">
                            <span className="e-icons e-circle-info icon"></span>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </TooltipComponent>
            );
          } else {
            return (
              <div key={item.id}>
                <CheckBoxComponent
                  label={item.label}
                  checked={item.defaultChecked}
                />
              </div>
            );
          }
        })}
      </div>
    );
  }

  // Handle tooltip before open
  const onTooltipBeforeOpen = (args: TooltipEventArgs): void => {
    // Get the resource ID and header text from data attributes
    const target = args.target as HTMLElement;
    const resourceId = parseInt(target.getAttribute('data-resource-id') || '0', 10);
    const headerText = target.getAttribute('data-header-text') || '';
    if (resourceId !== selectedResourceIdRef.current) {
      selectedColorRef.current = '';
    }
    // Store the header text
    selectedHeaderTextRef.current = headerText;
    // Find the current color of this resource
    const resource = calendarCollections.find(cal => cal.CalendarId === resourceId);
    if (resource) {
      selectedResourceIdRef.current = resourceId;
    } else {
      // Cancel opening if resource not found
      args.cancel = true;
    }
  };

  const afterTooltipOpen = (args: TooltipEventArgs): void => {
    if (colorPickerRef.current && selectedHeaderTextRef.current) {
      // Get the color from our mapping using the header text
      const calendarColor = calendarColorsRef.current[selectedHeaderTextRef.current];

      if (calendarColor) {
        // Set the color picker value
        colorPickerRef.current.value = calendarColor;
        selectedColorRef.current = calendarColor;

        // Find the tooltip element and change its background color
        const tooltipElement = document.querySelector('.e-tooltip-wrap.e-popup.color-picker-tooltip') as HTMLElement;
        if (tooltipElement) {
          // Apply the color to the tooltip background
          tooltipElement.style.background = calendarColor;

          // If you need to adjust text color for better contrast
          tooltipElement.style.color = getContrastColor(calendarColor);
        }
      }
    }
  };

  // Toggle color picker function
  const toggleColorPicker = (element: HTMLElement): void => {
    if (tooltipRef.current) {
      // Check if tooltip is already open for this element
      if (activeCircleRef.current === element) {
        hideColorPicker();
      } else {
        // Open for the new element
        activeCircleRef.current = element;
        tooltipRef.current.open(element);
      }
    }
  };

  // Hide color picker function
  const hideColorPicker = (): void => {
    if (tooltipRef.current) {
      tooltipRef.current.close();
      colorPickerRef.current?.destroy();
      activeCircleRef.current = null;
    }
  };

  // Handle color change in color picker
  const handleColorChange = (args: ColorPickerEventArgs): void => {
    if (args.currentValue && args.currentValue.hex) {
      selectedColorRef.current = args.currentValue.hex;
    }
  };

  // Handle color circle click
  const handleColorCircleClick = (
    e: React.MouseEvent<HTMLSpanElement>,
    resourceId: number,
    headerText: string
  ): void => {
    e.stopPropagation(); // Prevent accordion from toggling
    e.preventDefault(); // Prevent default behavior
    // Store the header text
    selectedHeaderTextRef.current = headerText;
    // Toggle the tooltip
    toggleColorPicker(e.currentTarget);
  };

  // Apply color change to resources
  const applyColorChange = (): void => {
    if (!selectedResourceIdRef.current || !selectedColorRef.current || !selectedHeaderTextRef.current) return;

    // Update our color mapping
    calendarColorsRef.current[selectedHeaderTextRef.current] = selectedColorRef.current;

    // Create updated calendars array with ALL current colors preserved
    const updatedCalendars = calendarCollections.map(calendar => {
      if (calendar.CalendarId === selectedResourceIdRef.current) {
        return { ...calendar, CalendarColor: selectedColorRef.current };
      } else {
        // Important: Preserve existing colors from our mapping
        const headerText = calendar.CalendarText;
        const existingColor = calendarColorsRef.current[headerText] || calendar.CalendarColor;
        return { ...calendar, CalendarColor: existingColor };
      }
    });

    // Update the scheduler resources
    if (scheduleObj.current) {
      // Get current resources
      const resources = scheduleObj.current.getResourceCollections();
      const categoriesResource = resources.find(res => res.name === 'Categories');

      scheduleObj.current.setResourceCollections([
        {
          field: 'CalendarId',
          title: 'Calendar',
          name: 'Calendars',
          dataSource: updatedCalendars,
          textField: 'CalendarText',
          idField: 'CalendarId',
          colorField: 'CalendarColor',
          expandedField: 'IsExpand'
        },
        categoriesResource || {}
      ]);

      // Update the UI - find and update the color circle
      const colorCircle = document.querySelector(`.accordion-color-indicator[data-resource-id="${selectedResourceIdRef.current}"]`) as HTMLElement;
      if (colorCircle) {
        colorCircle.style.backgroundColor = selectedColorRef.current;
      }
      // Update all checkboxes for this resource group
      const groupId = selectedResourceIdRef.current;
      const checkboxes = document.querySelectorAll(`.category-item[data-group-id="${groupId}"] .e-checkbox-wrapper`);
      checkboxes.forEach(checkbox => {
        // Update checkbox color variables
        const checkIcon = (checkbox as HTMLElement).querySelector('.e-icons.e-frame.e-check');
        if (checkIcon) {
          (checkIcon as HTMLElement).style.setProperty('--checkbox-active-color', selectedColorRef.current);
          (checkIcon as HTMLElement).style.setProperty('--checkbox-border-color', selectedColorRef.current);
        }
      });
    }
    // Close the color picker
    hideColorPicker();
  };

  // Render color picker dialog
  const RenderColorPickerTooltip = () => {
    return (
      <TooltipComponent
        ref={tooltipRef}
        width={'375px'}
        cssClass="color-picker-tooltip"
        opensOn="Click"
        target=".accordion-color-indicator"
        showTipPointer={false}
        beforeOpen={onTooltipBeforeOpen}
        afterOpen={afterTooltipOpen}
        position='RightBottom'
        windowCollision={true}
        content={() => (
          <div className="color-picker-container">
            <div className="color-picker-header">
              {selectedHeaderTextRef.current} Color
            </div>
            <ColorPickerComponent
              ref={colorPickerRef}
              inline={true}
              mode="Picker"
              modeSwitcher={false}
              showButtons={false}
              value={selectedColorRef.current}
              change={handleColorChange}
            />
            <div className="color-picker-actions">
              <ButtonComponent cssClass="apply-button" onClick={applyColorChange}>Apply</ButtonComponent>
              <ButtonComponent cssClass="cancel-button" onClick={() => hideColorPicker()}>Cancel</ButtonComponent>
            </div>
          </div>

        )}
      />
    );
  };

  // Helper function to determine appropriate text color based on background
  const getContrastColor = (hexColor: string): string => {
    // Convert hex to RGB
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);

    // Calculate luminance - standard formula
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    // Return black for light colors, white for dark colors
    return luminance > 0.5 ? '#000000' : '#ffffff';
  };

  // First, create a function to get the calendar color by group ID
  const getCalendarColorByGroupId = (groupId: number): string => {
    const calendar = calendarCollections.find(cal => cal.CalendarId === groupId);
    return calendar ? calendar.CalendarColor : '#9204EA'; // Default color
  };

  // Render each category group in the accordion
  const renderCategoryGroup = (groupId: number, categories: any[]) => {
    // Get the color for this group
    const groupColor = getCalendarColorByGroupId(groupId);
    return (
      <div className="category-items-container">
        {categories.map(category => (
          <div className="category-item" key={category.Id} data-group-id={groupId}>
            <CheckBoxComponent
              checked={selectedCategories.current.includes(category.Id)}
              label={category.CategoryText}
              id={`category-${category.Id}`}
              cssClass="category-checkbox"
              change={(e) => handleAccordionCheckboxChange(category.Id, e.checked)}
              // Add a custom style with CSS variables for the checkbox color
              htmlAttributes={{
                style: `--checkbox-active-color: ${groupColor}; --checkbox-border-color: ${groupColor};`
              }}
            />
            <span
              className="color-indicator"
              style={{ backgroundColor: category.CategoryColor }}
            ></span>
          </div>
        ))}
      </div>
    );
  };

  // Map group IDs to their display names
  const groupNames: { [key: number]: string } = {
    1: 'My Calendar',
    2: 'Company',
    3: 'Birthday',
    4: 'Unplanned Events'
  };

  const getEventData = (): Record<string, any> => {
    const date: Date = scheduleObj.current ? scheduleObj.current.selectedDate : new Date();
    return {
      Id: scheduleObj.current ? scheduleObj.current.getEventMaxID() : 0,
      Subject: '',
      StartTime: new Date(date.getFullYear(), date.getMonth(), date.getDate(), new Date().getHours(), 0, 0),
      EndTime: new Date(date.getFullYear(), date.getMonth(), date.getDate(), new Date().getHours() + 1, 0, 0),
      Location: '',
      Description: '',
      IsAllDay: false,
      CalendarId: 1,
      CategoryId: 1,
    };
  }

  // Create new event handler
  const handleNewEvent = () => {
    // If cell template is enabled, prevent creating new events
    if (checkboxStates['celltemplate'] || checkboxStates['readonlyschedule']) {
      return;
    }
    const eventData: Record<string, any> = getEventData();
    if (scheduleObj.current) {
      scheduleObj.current.openEditor(eventData, 'Add', true);
    }
  };

  const contextMenuOpen = (args: BeforeOpenCloseMenuEventArgs) => {
    // First check if we're in a quick info popup
    const quickPopup = closest(args.event.target as HTMLElement, '.e-quick-popup-wrapper');
    if (quickPopup && checkboxStates['quickinfotemplate']) {
      // If we're in a custom quick info popup, cancel the context menu
      args.cancel = true;
      return;
    }

    // Check if scheduler is in read-only mode
    const isReadOnly = scheduleObj.current?.readonly || false;
    let newEventElement: HTMLElement = document.querySelector('.e-new-event') as HTMLElement;
    if (newEventElement) {
      remove(newEventElement);
      removeClass([document.querySelector('.e-selected-cell') as Element], 'e-selected-cell');
    }
    if (scheduleObj.current) {
      scheduleObj.current.closeQuickInfoPopup();
    }
    let targetElement: HTMLElement = args.event.target as HTMLElement;
    if (closest(targetElement, '.e-contextmenu')) {
      return;
    }
    selectedTarget = closest(targetElement, '.e-appointment,.e-work-cells,.e-vertical-view .e-date-header-wrap .e-all-day-cells,.e-vertical-view .e-date-header-wrap .e-header-cells');
    if (isNullOrUndefined(selectedTarget)) {
      args.cancel = true;
      return;
    }
    if (selectedTarget.classList.contains('e-appointment')) {
      let eventObj: Record<string, any> = scheduleObj.current ? scheduleObj.current.getEventDetails(selectedTarget) as Record<string, any> : {};
      if (eventObj.RecurrenceRule) {
        if (contextMenuObj.current) {
          contextMenuObj.current.showItems(['EditRecurrenceEvent', 'DeleteRecurrenceEvent'], true);
          contextMenuObj.current.hideItems(['Add', 'AddRecurrence', 'Today', 'Save', 'Delete'], true);

          // Disable edit/delete items if in read-only mode
          if (isReadOnly) {
            contextMenuObj.current.enableItems(['Edit Recurrence Event', 'Delete Recurrence Event'], false);
          } else {
            contextMenuObj.current.enableItems(['Edit Recurrence Event', 'Delete Recurrence Event'], true);
          }
        }
      } else {
        if (contextMenuObj.current) {
          contextMenuObj.current.showItems(['Save', 'Delete'], true);
          contextMenuObj.current.hideItems(['Add', 'AddRecurrence', 'Today', 'EditRecurrenceEvent', 'DeleteRecurrenceEvent'], true);

          // Disable edit/delete items if in read-only mode
          if (isReadOnly) {
            contextMenuObj.current.enableItems(['Edit Event', 'Delete Event'], false);
          } else {
            contextMenuObj.current.enableItems(['Edit Event', 'Delete Event'], true);
          }
        }
      }
      return;
    } else if ((selectedTarget.classList.contains('e-work-cells') || selectedTarget.classList.contains('e-all-day-cells')) &&
      !selectedTarget.classList.contains('e-selected-cell')) {
      if (scheduleObj.current) {
        removeClass([].slice.call(scheduleObj.current.element.querySelectorAll('.e-selected-cell')), 'e-selected-cell');
      }
      selectedTarget.setAttribute('aria-selected', 'true');
      selectedTarget.classList.add('e-selected-cell');
    }
    if (contextMenuObj.current) {
      contextMenuObj.current.hideItems(['Save', 'Delete', 'EditRecurrenceEvent', 'DeleteRecurrenceEvent'], true);
      contextMenuObj.current.showItems(['Add', 'AddRecurrence', 'Today'], true);

      // Disable add event items if in read-only mode
      if (isReadOnly) {
        contextMenuObj.current.enableItems(['New Event', 'New Recurring Event'], false);
      } else {
        contextMenuObj.current.enableItems(['New Event', 'New Recurring Event'], true);
      }
      // Today navigation should always be enabled
      contextMenuObj.current.enableItems(['Today'], true);
    }
  }

  const contextMenuSelect = (args: ContextMenuEventArgs) => {
    let selectedMenuItem: string = args.item.id as string;
    let eventObj: Record<string, any> = {};
    if (selectedTarget && selectedTarget.classList.contains('e-appointment')) {
      if (scheduleObj.current) {
        eventObj = scheduleObj.current.getEventDetails(selectedTarget) as Record<string, any>;
      }
    }
    switch (selectedMenuItem) {
      case 'Today':
        if (scheduleObj.current) {
          scheduleObj.current.selectedDate = new Date();
        }
        break;
      case 'Add':
      case 'AddRecurrence':
        let selectedCells: Element[] = scheduleObj.current ? scheduleObj.current.getSelectedElements() : [];
        let isRightClickInSelectedCells: boolean = selectedCells.some(cell => cell === selectedTarget);
        let activeCellsData: CellClickEventArgs = scheduleObj.current ? scheduleObj.current.getCellDetails(isRightClickInSelectedCells ? selectedCells : [selectedTarget]) : {} as CellClickEventArgs;
        if (selectedMenuItem === 'Add') {
          if (scheduleObj.current) {
            scheduleObj.current.openEditor(activeCellsData, 'Add');
          }
        } else {
          if (scheduleObj.current) {
            scheduleObj.current.openEditor(activeCellsData, 'Add', false, 1);
          }
        }
        break;
      case 'Save':
      case 'EditOccurrence':
      case 'EditSeries':
        if (selectedMenuItem === 'EditSeries') {
          let query: Query = new Query();
          if (scheduleObj.current) {
            query = new Query().where(scheduleObj.current.eventFields.id as string, 'equal', eventObj.RecurrenceID as string | number);
          }
          if (scheduleObj.current) {
            eventObj = new DataManager(scheduleObj.current.eventsData).executeLocal(query)[0] as Record<string, any>;
          }
        }
        if (scheduleObj.current) {
          scheduleObj.current.openEditor(eventObj, selectedMenuItem);
        }
        break;
      case 'Delete':
        if (scheduleObj.current) {
          scheduleObj.current.deleteEvent(eventObj);
        }
        break;
      case 'DeleteOccurrence':
      case 'DeleteSeries':
        if (scheduleObj.current) {
          scheduleObj.current.deleteEvent(eventObj, selectedMenuItem);
        }
        break;
    }
  }

  const rowSelected = (args: SelectEventArgs): void => {
    // Hide the search dialog
    searchDialogObj.current?.hide();

    // Get the selected event data
    const eventData = args.data;

    // Open the event in edit mode in the scheduler
    if (scheduleObj.current && eventData) {
      // Open the event for editing
      scheduleObj.current.openEditor(eventData, 'Save');
    }
  }

  // Modify the created function to sync the search text
  const created = () => {
    if (eventSearchGridInstance.current) {
      const searchbar = document.getElementById(eventSearchGridInstance.current.element.id + "_searchbar") as HTMLInputElement;
      const clearbutton = document.getElementById(eventSearchGridInstance.current.element.id + "_clearbutton") as HTMLInputElement;
      if (searchbar) {
        // Set initial value from ref
        searchbar.value = searchTextRef.current;

        // Add event listener for changes
        searchbar.addEventListener('input', (event) => {
          const newValue = (event.target as HTMLInputElement).value;
          searchTextRef.current = newValue;

          // Update the toolbar search input
          if (toolbarSearchInputRef.current) {
            toolbarSearchInputRef.current.value = newValue;
          }

          if (eventSearchGridInstance.current) {
            eventSearchGridInstance.current.search(newValue);
          }
        });
      }
      if (clearbutton) {
        clearbutton.addEventListener('click', () => {
          searchTextRef.current = '';
          if (toolbarSearchInputRef.current) {
            toolbarSearchInputRef.current.value = '';
          }
        });
      }
    }
  }

  const setDimension = (width: number | string) => {
    if (typeof width === 'number') {
      width = formatUnit(width);
    } else if (typeof width === 'string') {
      width = (width.match(/px|%|em/)) ? width : formatUnit(width);
    } else {
      width = '100%';
    }
    return width;
  }

  const onSidebarOpen = () => {
    const sibling: HTMLElement | null = document.querySelector('.sidebar-content');
    const mainElement: HTMLElement | null = document.querySelector('.sidebar-treeview');
    const elementWidth: number = mainElement ? mainElement.getBoundingClientRect().width : 0;
    if (sibling) {
      sibling.style.marginLeft = setDimension(elementWidth);
    }
    setTimeout(() => {
      scheduleObj.current?.refreshLayout();
      scheduleObj.current?.refreshEvents();
    }, 500);
  }

  const onSidebarCreated = () => {
    const sibling: HTMLElement | null = document.querySelector('.sidebar-content');
    const mainElement: HTMLElement | null = document.querySelector('.sidebar-treeview');
    const elementWidth: number = mainElement ? mainElement.getBoundingClientRect().width : 0;
    if (sibling) {
      sibling.style.marginLeft = setDimension(elementWidth);
    }
  }

  const onSidebarClose = () => {
    const sibling: HTMLElement | null = document.querySelector('.sidebar-content');
    const mainElement: HTMLElement | null = document.querySelector('.sidebar-treeview');
    const elementWidth: number = mainElement ? mainElement.getBoundingClientRect().width : 0;
    if (sibling) {
      sibling.style.marginLeft = setDimension(elementWidth);
    }
    setTimeout(() => {
      scheduleObj.current?.refreshLayout();
      scheduleObj.current?.refreshEvents();
    }, 500);
  }

  const onSidebarDockClose = (args: SidebarEventArgs) => {
    setTimeout(() => {
      const sibling: HTMLElement | null = document.querySelector('.list-sidebar-content');
      if (sibling) {
        sibling.style.marginLeft = setDimension(0);
      }
    }, 100);
  }

  // Define SVG icons for each calendar type
  const calendarSvgIcons: Record<string, string> = {
    "Birthday": `<img src="${BirthdayCelebrationMonth}" alt="Birthday" class="event-type-icon" />`,
    "Housewarming": `<img src="${HouseWarmingMonth}" alt="Housewarming" class="event-type-icon" />`,
    "Leadership Development": `<img src="${LeadershipDevelopmentMonth}" alt="Leadership Development" class="event-type-icon" />`,
    "Yoga": `<img src="${YogaMonth}" alt="Yoga" class="event-type-icon" />`,
    "Group Meeting": `<img src="${GroupMeetingMonth}" alt="Group Meeting" class="event-type-icon" />`,
    "New Car Delivery": `<img src="${NewCarCeremonyMonth}" alt="New Car Delivery" class="event-type-icon" />`,
    "Service": `<img src="${ServiceMaintenanceMonth}" alt="Service" class="event-type-icon" />`,
    "Vacation": `<img src="${VacationMonth}" alt="Vaccation" class="event-type-icon" />`,
    "Weekend Celebration": `<img src="${WeekendCelebrationMonth}" alt="Weekend Celebration" class="event-type-icon" />`,
    "Medical Check-up": `<img src="${MedicalCheckupMonth}" alt="Medical Check-up" class="event-type-icon" />`,
    "Fitness": `<img src="${FitnessMonth}" alt="Fitness" class="event-type-icon" />`,
    "Baby Shower": `<img src="${BabyShowerMonth}" alt="Baby Shower" class="event-type-icon" />`,
    "Wedding": `<img src="${WeddingMonth}" alt="Wedding" class="event-type-icon" />`,
    "Charity": `<img src="${CharityMonth}" alt="Charity" class="event-type-icon" />`,
    "One One meeting": `<img src="${OneToOneMeetingMonth}" alt="One One meeting" class="event-type-icon" />`,
    "Business meeting": `<img src="${BusinessMeetingMonth}" alt="Business meeting" class="event-type-icon" />`,
    "Cybersecurity": `<img src="${CybersecurityMonth}" alt="Cybersecurity" class="event-type-icon" />`,
    "Product Innovation": `<img src="${ProductInnovationMonth}" alt="Product Innovation" class="event-type-icon" />`,
    "Customer Relations": `<img src="${CustomerRelationsMonth}" alt="Customer Relations" class="event-type-icon" />`,
    "Performance": `<img src="${PerformanceMonth}" alt="Performance" class="event-type-icon" />`
  };

  const quickPopupCalendarSvgIcons: Record<string, string> = {
    "Birthday": `<img src="${BirthdayCelebrationDay}" alt="Birthday" class="event-type-icon" />`,
    "Baby Shower": `<img src="${BabyShowerDay}" alt="Baby Shower" class="event-type-icon" />`,
    "Wedding": `<img src="${WeddingDay}" alt="Wedding" class="event-type-icon" />`,
    "Housewarming": `<img src="${HousewarmingDay}" alt="Housewarming" class="event-type-icon" />`,
    "New Car Delivery": `<img src="${NewCarCeremonyDay}" alt="New Car Delivery" class="event-type-icon" />`,
    "Medical Check-up": `<img src="${MedicalCheckupDay}" alt="Medical Check-up" class="event-type-icon" />`,
    "Fitness": `<img src="${FitnessDay}" alt="Fitness" class="event-type-icon" />`,
    "Yoga": `<img src="${YogaDay}" alt="Yoga" class="event-type-icon" />`,
    "Vacation": `<img src="${VacationDay}" alt="Vaccation" class="event-type-icon" />`,
    "Weekend Celebration": `<img src="${WeekendCelebrationDay}" alt="Weekend Celebration" class="event-type-icon" />`,
    "Service": `<img src="${ServiceMaintenanceDay}" alt="Service" class="event-type-icon" />`,
    "Charity": `<img src="${CharityDay}" alt="Charity" class="event-type-icon" />`,
    "One One meeting": `<img src="${OneToOneMeetingDay}" alt="One One meeting" class="event-type-icon" />`,
    "Group Meeting": `<img src="${GroupMeetingDay}" alt="Group Meeting" class="event-type-icon" />`,
    "Business meeting": `<img src="${BusinessMeetingDay}" alt="Business meeting" class="event-type-icon" />`,
    "Cybersecurity": `<img src="${CybersecurityDay}" alt="Cybersecurity" class="event-type-icon" />`,
    "Product Innovation": `<img src="${ProductInnovationDay}" alt="Product Innovation" class="event-type-icon" />`,
    "Customer Relations": `<img src="${CustomerRelationsDay}" alt="Customer Relations" class="event-type-icon" />`,
    "Leadership Development": `<img src="${LeadershipDevelopmentDay}" alt="Leadership Development" class="event-type-icon" />`,
    "Performance": `<img src="${PerformanceDay}" alt="Performance" class="event-type-icon" />`
  };

  const sideBarContent = () => {
    return (
      <div id="sblist-wrapper" className="control-section">
        <div id="sidelistwrapper">
          <div className="listmaincontent">
            <div className='list-sidebar-content'>
              <div id="listContent" className="listcontent">
                {renderCheckBoxGroup(selectedIndex)}
              </div>
            </div>
          </div>
        </div>
        <SidebarComponent id="listSidebar" ref={sidebarObj} enableDock={true} className="sidebar-list" width="180px" height="660px" target=".listmaincontent" type="Auto" isOpen={true} close={onSidebarDockClose}>
          <ListViewComponent id="listSidebarList" ref={listViewObj} height="100%" enableVirtualization={true} dataSource={scheduleParentProperties} cssClass="e-template-list" template={listTemplate} fields={{ id: "id", text: "text" }} select={OnSelect}>
            <Inject services={[Virtualization]} />
          </ListViewComponent>
        </SidebarComponent>
      </div>
    );
  }

  const footerTemplate = () => {
    return (
      <div className='dialog-footer' style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <ButtonComponent id="save" cssClass="e-link" content="Save" onClick={handleClick}></ButtonComponent>
        <ButtonComponent id="apply" cssClass="e-link" content="Apply" onClick={handleClick}></ButtonComponent>
      </div>
    );
  }

  const ScheduleDisplayData = () => {
    return (
      <div className='display-data-container'>
        {stepIndex >= 0 && stepIndex < steps.length && (
          <div className="walkthrough-display-data-overlay" />
        )}
        <div className='download-button-container'>
          <a
            id="download-now-button"
            href="https://www.syncfusion.com/downloads/react?tag=es-livesample-react-featurerich-schedule" className="btn btn-free bold free-trial-gtag-sep15"
          >
            <span className="btn__text">TRY IT FREE</span>
          </a>
        </div>
      </div>
    );
  }

  // Update your globalSearch function to use the ref
  const globalSearch = (args: React.KeyboardEvent<HTMLInputElement>) => {
    const searchString = searchTextRef.current;
    if (searchString !== '') {
      if (!scheduleObj.current) {
        return;
      }
      new DataManager(scheduleObj.current.getEvents(undefined, undefined, true)).executeQuery(new Query().search(searchString, ['Subject', 'Description'], undefined, true, true)).then((e: ReturnOption) => {
        if ((e.result as any).length > 0) {
          setSearchEventData(Array.isArray(e.result) ? e.result : []);
          setShowSearchDialog(true);
          setTimeout(() => {
            if (eventSearchGridInstance.current) {
              eventSearchGridInstance.current.search(searchString);
              // Set the search text in the grid's search bar
              const searchBar = eventSearchGridInstance.current.element.querySelector(
                "#" + eventSearchGridInstance.current.element.id + "_searchbar"
              ) as HTMLInputElement;
              if (searchBar) {
                searchBar.value = searchString;
                searchBar.focus();
              }
            }
          }, 100);
        } else {
          setSearchEventData([]);
          setShowSearchDialog(false);
        }
      });
    } else {
      setSearchEventData([]);
      setShowSearchDialog(false);
    }
  }

  // Update the dialog close handler to maintain the search text
  const searchDialogClose = () => {
    setShowSearchDialog(false);

    // Update the toolbar search input with the current search text
    if (toolbarSearchInputRef.current) {
      toolbarSearchInputRef.current.value = searchTextRef.current;
    }
  }

  const SearchGridDialog = () => {
    return (
      <DialogComponent
        id="defaultdialog"
        ref={searchDialogObj}
        visible={showSearchDialog}
        showCloseIcon={true}
        animationSettings={animationSettings}
        height={500}
        width={700}
        header="Search event"
        isModal={true}
        close={searchDialogClose}
      >
        <GridComponent
          ref={eventSearchGridInstance}
          dataSource={searchEventData}
          selectionSettings={searchGridSelectionSettings}
          rowSelected={rowSelected}
          toolbar={searchGridToolbarOptions}
          created={created}
        >
          <ColumnsDirective>
            <ColumnDirective
              field="Subject"
              headerText="Subject"
              width="150"
            />
            <ColumnDirective field="StartTime" headerText="StartTime" width="120" format={{ type: 'dateTime', format: 'M/d/y hh:mm a' }} />
            <ColumnDirective
              field="EndTime"
              headerText="EndTime"
              width="120"
              format={{ type: 'dateTime', format: 'M/d/y hh:mm a' }}
            />
          </ColumnsDirective>
          <GridInject
            services={[Selection, GridToolbar, Edit, Sort, CommandColumn]}
          />
        </GridComponent>
      </DialogComponent>
    );
  }

  const SearchBox = () => {
    return (
      <div className="search-container" ref={searchContainerRef}>
        <span className='e-input-group e-control-wrapper custom-textbox'>
          <span className='e-icons e-search e-input-group-icon'></span>
          <input ref={toolbarSearchInputRef} type='text' className='e-input' placeholder='Search...' onKeyUp={globalSearch} onInput={(e) => { searchTextRef.current = (e.target as HTMLInputElement).value; }} />
        </span>
      </div>
    );
  }

  const viewDropdown = () => {
    return (
      <div className="view-dropdown-container">
        <DropDownListComponent ref={viewDropdownRef} cssClass='view-dropdown' width={160} popupHeight={160} popupWidth={156} placeholder="View" fields={dropdownFieldsMapping} dataSource={viewOptions} value={currentViewRef.current} change={onDropdownViewChange} />
      </div>
    );
  }

  const onTreeDragStop = (event: DragAndDropEventArgs): void => {
    // If scheduler is in read-only mode, cancel the drag operation
    if (checkboxStates['readonlyschedule']) {
      event.cancel = true;
      return;
    }
    let treeElement: Element = closest(event.target, '.e-treeview');
    if (scheduleObj.current) {
      let classElement: HTMLElement | null = scheduleObj.current.element.querySelector('.e-device-hover');
      if (classElement) {
        classElement.classList.remove('e-device-hover');
      }
    }
    if (!treeElement) {
      event.cancel = true;
      let scheduleElement: Element = closest(event.target, '.e-content-wrap, .e-date-header-container');
      if (scheduleElement) {
        let treeviewData: Record<string, any>[] = treeObj.current ? (treeObj.current.fields.dataSource as Record<string, any>[]) : [];
        if ((event.target.classList.contains('e-work-cells') || event.target.classList.contains('e-all-day-cells')) && scheduleObj.current) {
          const filteredData: Record<string, any>[] = treeviewData.filter((item: any) => item.Id === parseInt(event.draggedNodeData.id as string, 10));
          let cellData: CellClickEventArgs = scheduleObj.current.getCellDetails(event.target);
          // Set isAllDay to true if dropped on all-day cell
          const isAllDay = event.target.classList.contains('e-all-day-cells');
          if (cellData.groupIndex !== undefined) {
            let resourceDetails: ResourceDetails = scheduleObj.current.getResourcesByIndex(cellData.groupIndex);
            let eventData: Record<string, any> = {
              Subject: filteredData[0].Subject,
              StartTime: cellData.startTime,
              EndTime: cellData.endTime,
              IsAllDay: isAllDay || cellData.isAllDay, // Use either the cell's isAllDay or our detection
              Description: filteredData[0].Description,
              CalendarId: resourceDetails.resourceData.GroupId,
              CategoryId: resourceDetails.resourceData.Id
            };
            scheduleObj.current.openEditor(eventData, 'Add', true);
            isTreeItemDropped = true;
            draggedItemId = event.draggedNodeData.id as string;
          } else {
            let eventData: Record<string, any> = {
              Subject: filteredData[0].Subject,
              StartTime: cellData.startTime,
              EndTime: cellData.endTime,
              IsAllDay: isAllDay || cellData.isAllDay, // Use either the cell's isAllDay or our detection
              Description: filteredData[0].Description,
              CalendarId: 1,
              CategoryId: 1
            };
            scheduleObj.current.openEditor(eventData, 'Add', true);
            isTreeItemDropped = true;
            draggedItemId = event.draggedNodeData.id as string;
          }
        }
      }
    } else {
      event.cancel = true;
    }
    document.body.classList.remove('e-disble-not-allowed');
  }

  const onTreeDragStart = (args: DragAndDropEventArgs) => {
    document.body.classList.add('e-disble-not-allowed');
  }

  const onItemSelecting = (args: any): void => {
    args.cancel = true;
  }

  const onTreeDrag = (event: any): void => {
    if (scheduleObj.current && scheduleObj.current.isAdaptive) {
      let classElement = scheduleObj.current.element.querySelector('.e-device-hover');
      if (classElement) {
        (classElement as HTMLElement).classList.remove('e-device-hover');
      }
      if (event.target.classList.contains('e-work-cells') || event.target.classList.contains('e-all-day-cells')) {
        addClass([event.target], 'e-device-hover');
      }
    }
  }

  const onSaveButtonClick = (args: PopupOpenEventArgs, id: string) => {
    // Get form values
    const startTime = (args.element.querySelector('#StartTime') as any).ej2_instances[0].value;
    const endTime = (args.element.querySelector('#EndTime') as any).ej2_instances[0].value;
    const subject = (args.element.querySelector('#Subject') as HTMLInputElement).value;
    const categoryId = (args.element.querySelector('#CategoryId') as any).ej2_instances[0].value;
    const recurrenceElement = args.element.querySelector('#scheduler_recurrence_editor');
    const recurrenceRule = recurrenceElement ? (recurrenceElement as any).ej2_instances[0].value : null;
    const description = (args.element.querySelector('#Description') as HTMLInputElement)?.value || '';
    // Get optional fields with fallbacks for custom templates
    // For isAllDay, use a safer approach with optional chaining and default to false
    const isAllDayElement = args.element.querySelector('#IsAllDay') as HTMLInputElement;
    const isAllDay = isAllDayElement ? isAllDayElement.checked : false;

    // For location, provide a default empty string 
    const locationElement = args.element.querySelector('#Location') as HTMLInputElement;
    const location = locationElement ? locationElement.value : '';
    // Timezone fields with safe defaults
    const startTimezoneElement = args.element.querySelector('#StartTimezone');
    const startTimezone = startTimezoneElement && (startTimezoneElement as any).ej2_instances
      ? (startTimezoneElement as any).ej2_instances[0].value || ''
      : '';

    const endTimezoneElement = args.element.querySelector('#EndTimezone');
    const endTimezone = endTimezoneElement && (endTimezoneElement as any).ej2_instances
      ? (endTimezoneElement as any).ej2_instances[0].value || ''
      : '';

    // Validation
    if (!startTime || !endTime) {
      alert('Start time and end time are required');
      return;
    }

    if (startTime > endTime) {
      alert('Start time cannot be greater than end time');
      return;
    }

    if (!categoryId || (Array.isArray(categoryId) && categoryId.length === 0)) {
      alert('Please select at least one category');
      return;
    }

    // If validation passes, proceed with saving
    const data: Record<string, any> = {
      Id: args.data?.Id ?? 0,
      Subject: subject || 'No title',
      StartTime: startTime,
      EndTime: endTime,
      IsAllDay: isAllDay,
      RecurrenceRule: recurrenceRule || args.data?.RecurrenceRule,
      Location: location,
      Description: description,
      StartTimezone: startTimezone,
      EndTimezone: endTimezone,
      CalendarId: (args.element.querySelector('#CalendarId') as any).ej2_instances[0].value,
      CategoryId: categoryId
    };
    const categoryIds = Array.isArray(data.CategoryId) ? data.CategoryId : [data.CategoryId];
    if (args.target && args.target.classList.contains('e-appointment')) {
      if (id === 'Save') {
        categoryIds.forEach(categoryId => {
          const eventData = { ...data, CategoryId: categoryId };
          scheduleObj.current?.saveEvent(eventData, 'Save');
        });
      } else if (id === 'Delete') {
        categoryIds.forEach((categoryId) => {
          const eventData = { ...data, CategoryId: categoryId };
          scheduleObj.current?.deleteEvent(eventData, 'Delete');
        });
      }
    } else {
      // Get the initial max ID
      let baseId = Number(scheduleObj.current?.getEventMaxID() || 1);
      categoryIds.forEach((categoryId, index) => {
        // Create a new unique ID by adding the index to the base ID
        const newId = baseId + index;
        const eventData = { ...data, Id: newId, CategoryId: categoryId };
        scheduleObj.current?.addEvent(eventData);
      });
    }
    scheduleObj.current?.closeEditor();
  }

  const onPopupOpen = (args: PopupOpenEventArgs): void => {
    // Check if cell template is enabled and this is a cell click (new appointment)
    if ((args.type === 'QuickInfo' || args.type === 'Editor') && checkboxStates['celltemplate'] && !args.data?.Id) {
      // If cell template is enabled and this is a new appointment, cancel the popup
      args.cancel = true;
      return;
    }
    if (args.type === 'Editor') {
      setTimeout(() => {
        const saveButton: HTMLElement = args.element.querySelector('#Save') as HTMLElement;
        const deleteButton: HTMLElement = args.element.querySelector('#Delete') as HTMLElement;
        const cancelButton: HTMLElement = args.element.querySelector('#Cancel') as HTMLElement;
        if (!saveButton || !cancelButton) {
          console.warn("One or more elements are missing in the popup.");
          return;
        }
        saveButton.onclick = () => {
          onSaveButtonClick(args, 'Save');
        }
        // Add onclick handler to Delete button only if it exists
        if (deleteButton) {
          deleteButton.onclick = () => {
            onSaveButtonClick(args, 'Delete');
          }
        }
        cancelButton.onclick = () => {
          scheduleObj.current?.closeEditor();
        };
      }, 100);
    }
    if (checkboxStates['quickinfotemplate']) {
      let quickPopupElement: HTMLElement = args.element as HTMLElement;
      addClass([quickPopupElement], 'customized-cell-popup');
      // Set timeout to ensure DOM is fully rendered
      setTimeout(() => {
        // Only focus if it's a cell popup (new event) and not an event popup
        if (titleObj.current) {
          titleObj.current.focusIn();
        }
      }, 50);
    } else {
      let quickPopupElement: HTMLElement = args.element as HTMLElement;
      removeClass([quickPopupElement], 'customized-cell-popup');
    }
  }

  const onActionBegin = (args: ActionEventArgs): void => {
    if (args.requestType === 'dateNavigate' || args.requestType === 'viewNavigate') {
      const targetElement: HTMLElement = (args.event?.target) as HTMLElement;
      isDateHeaderClicked = targetElement?.classList.contains('e-date-header') || targetElement?.classList.contains('e-header-date') || targetElement?.classList.contains('e-m-date') || targetElement?.classList.contains('e-navigate');
      isDateNavigationClicked = args.requestType === "dateNavigate";
    }
    if (args.requestType === 'eventCreate' && isTreeItemDropped && treeObj.current) {
      let treeViewData: Record<string, any>[] = treeObj.current.fields.dataSource as Record<string, any>[];
      const filteredPeople: Record<string, any>[] = treeViewData.filter((item: any) => item.Id !== parseInt(draggedItemId, 10));
      treeObj.current.fields.dataSource = filteredPeople;
      let elements: NodeListOf<HTMLElement> = document.querySelectorAll('.e-drag-item.treeview-external-drag');
      for (let i: number = 0; i < elements.length; i++) {
        remove(elements[i]);
      }
    }
  }

  const treeViewFields: Record<string, any> = { dataSource: (dataSource as Record<string, any>).waitingList, id: 'Id', text: 'Subject' };

  const treeTemplate = (props: any) => {
    return (
      <div id="unplanned-text-containers">
        <span className="e-icons e-drag-and-drop"></span>
        <div id="unplanned-text" title={props.Subject}>{props.Subject}</div>
      </div>
    );
  }

  // Render unplanned events as TreeView
  const renderUnplannedEventsTreeView = () => {
    return (
      <div className="unplanned-treeview-container">
        <TreeViewComponent
          ref={treeObj}
          fields={treeViewFields}
          cssClass="treeview-external-drag"
          dragArea=".parent-schedule-container"
          nodeDragStop={onTreeDragStop}
          nodeSelecting={onItemSelecting}
          nodeDragging={onTreeDrag}
          nodeDragStart={onTreeDragStart}
          nodeTemplate={treeTemplate}
          allowDragAndDrop={true}
        />
      </div>
    );
  };

  const ScheduleOverview = () => {
    return (
      <div id='schedule-overview-container' className='schedule-overview-container drag-sample-wrapper overlay'>
        <SidebarComponent id="sidebar-left" className="sidebar-treeview overlay" ref={calendarSidebarObj} width={'252px'} height={'550px'} target={'.main-content'} type='Auto' isOpen={true} created={onSidebarCreated} open={onSidebarOpen} close={onSidebarClose}>
          <div className="walkthrough-sidebar-left-overlay" />
          <ButtonComponent ref={newEventObj} id='new-event' cssClass='e-inherit' iconCss='e-icons e-plus' content='New Event' onClick={handleNewEvent}></ButtonComponent>
          <div className="separator-line"></div>
          <div className='accordion-container'>
            <AccordionComponent className='sidebar-accordion' expandMode="Single">
              <AccordionItemsDirective>
                {Object.entries(getCategoryGroups()).map(([groupIdStr, categories]) => {
                  const groupId = parseInt(groupIdStr);
                  // Skip the Unplanned Events category for now
                  if (groupId === 5) return null;
                  const groupName = groupNames[groupId] || `Group ${groupId}`;
                  const groupColor = getCalendarColorByGroupId(groupId);
                  return (
                    <AccordionItemDirective
                      key={groupId}
                      header={() => (
                        <div className="accordion-header-with-color" data-group-id={groupId}>
                          <span className="accordion-header-text">{groupName}</span>
                          <div className="spacer"></div>
                          <span
                            className="accordion-color-indicator"
                            data-resource-id={groupId}
                            data-header-text={groupName}
                            style={{ backgroundColor: groupColor }}
                            onClick={(e) => handleColorCircleClick(e, groupId, groupName)}
                          >
                          </span>
                        </div>
                      )}
                      expanded={groupId === 1} // Expand My Calendar by default
                      content={() => renderCategoryGroup(groupId, categories)}
                      iconCss="e-icons e-circle-filled"
                    />
                  );
                })}

                {/* Add Unplanned Events as a separate accordion item with TreeView */}
                <AccordionItemDirective
                  id='Unplanned Events'
                  header="Unplanned Events"
                  expanded={false}
                  content={renderUnplannedEventsTreeView}
                  iconCss="e-icons e-circle-filled"
                />
              </AccordionItemsDirective>
            </AccordionComponent>
          </div>
        </SidebarComponent>
        <div className="main-content" id="main-text">
          <div className="sidebar-content">
            {showCustomiedToolbar && (
              <div id='control-content' className={displayMode.current === 'Touch' ? 'e-bigger parent-schedule-container' : 'parent-schedule-container'}>
                <ScheduleComponent key={`scheduler-${checkboxStates['enablegrouping'] ? 'grouped' : 'ungrouped'}`} id='scheduler' cssClass='schedule-overview' ref={scheduleObj} timezone='Etc/GMT' width='100%' height='100%' eventSettings={eventSettings} group={group} currentView={currentViewRef.current} selectedDate={scheduleDate} allowDragAndDrop={dragAndDrop} actionComplete={onActionComplete} resourceHeaderTemplate={resourceHeaderTemplate} created={scheduleObjCreated} actionBegin={onActionBegin} popupOpen={onPopupOpen} navigating={onNavigating} eventRendered={eventRenderedEvent} resizeStart={onResizeStart} allowSwiping={false} eventClick={onEventClick}>
                  <ResourcesDirective>
                    <ResourceDirective field='CalendarId' title='Calendar' name='Calendars' dataSource={calendarCollections} textField='CalendarText' idField='CalendarId' colorField='CalendarColor' expandedField='IsExpand' />
                    <ResourceDirective field='CategoryId' title='Category' name='Categories' dataSource={categoriesData} textField='CategoryText' idField='Id' colorField='CategoryColor' groupIDField="GroupId" allowMultiple={true} workDaysField='workDays' startHourField='startHour' endHourField='endHour' />
                  </ResourcesDirective>
                  <ToolbarItemsDirective>
                    <ToolbarItemDirective prefixIcon='e-menu' align='Left' overflow='Show' click={closeSidebar}></ToolbarItemDirective>
                    <ToolbarItemDirective name='Previous' align='Left'></ToolbarItemDirective>
                    <ToolbarItemDirective name='Next' align='Left'></ToolbarItemDirective>
                    <ToolbarItemDirective name='DateRangeText' align='Left'></ToolbarItemDirective>
                    <ToolbarItemDirective template={SearchBox} align='Right'></ToolbarItemDirective>
                    <ToolbarItemDirective name='Today' align='Right'></ToolbarItemDirective>
                    <ToolbarItemDirective type='Separator' align='Right'></ToolbarItemDirective>
                    <ToolbarItemDirective text='Timeline Month' tooltipText='Timeline Month' align='Right' cssClass='timeline-month e-hide' overflow='Show' />
                    <ToolbarItemDirective
                      text='Month'
                      tooltipText='Month'
                      align='Right'
                      cssClass='template-month e-hide'
                      overflow='Show'
                    />
                    <ToolbarItemDirective
                      type='Input'
                      template={viewDropdown}
                      align='Right'
                      cssClass='view-dropdown'
                    />
                    <ToolbarItemDirective type='Input' template={exportComponent} align='Right' showTextOn='Overflow' id="custom_export"></ToolbarItemDirective>
                    <ToolbarItemDirective prefixIcon='e-icons e-settings' align='Right' showTextOn='Overflow' overflow='Show' id="overview_toolbar_settings" click={toolbarDialog}></ToolbarItemDirective>
                  </ToolbarItemsDirective>
                  <ViewsDirective>
                    <ViewDirective option='Day' interval={dayViewIntervalRef.current} displayName={checkboxStates['displayname'] ? `${dropdownValues['displayinterval'] || 1} Day${Number(dropdownValues['displayinterval']) > 1 ? 's' : ''}` : undefined} />
                    <ViewDirective option='Week' />
                    <ViewDirective option='WorkWeek' />
                    <ViewDirective option='Month' allowVirtualScrolling={true} enableLazyLoading={true} />
                    <ViewDirective option='Year' />
                    <ViewDirective option='Agenda' />
                    <ViewDirective option='MonthAgenda' />
                    <ViewDirective option='TimelineDay' />
                    <ViewDirective option='TimelineYear' displayName='Horizontal TimelineYear' />
                    <ViewDirective option='TimelineYear' displayName='Vertical TimelineYear' orientation="Vertical" />
                    <ViewDirective option='TimelineWeek' />
                    <ViewDirective option='TimelineWorkWeek' />
                    <ViewDirective option='TimelineMonth' allowVirtualScrolling={false} enableLazyLoading={false} />
                  </ViewsDirective>
                  <Inject services={[Day, Week, WorkWeek, Month, Year, Agenda, TimelineViews, TimelineMonth, TimelineYear, MonthAgenda, DragAndDrop, Resize, Print, ExcelExport, ICalendarImport, ICalendarExport]} />
                </ScheduleComponent>
                <div className="walkthrough-schedule-overlay" />
                <div id="grid" ref={gridElement}></div>
                <ContextMenuComponent id='overviewContextMenu' cssClass='schedule-context-menu' ref={contextMenuObj} target='.e-schedule' items={contextMenuItems} beforeOpen={contextMenuOpen} select={contextMenuSelect} />
                <div id="targetElement" className="dialog-target">
                  <DialogComponent
                    id="properties_dialog"
                    target={'#targetElement'}
                    ref={dialogObj}
                    visible={showDialog}
                    isModal={true}
                    header="Settings"
                    height='100%'
                    width='720px'
                    content={sideBarContent}
                    open={dialogObjOpen}
                    close={dialogObjClose}
                    footerTemplate={footerTemplate as any}
                    showCloseIcon={true}
                  >
                  </DialogComponent>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  const eventSettings: EventSettingsModel = {
    dataSource: (dataSource as Record<string, any>).calendarData,
    enableTooltip: true,
    enableMaxHeight: false,
    enableIndicator: false,
    ignoreWhitespace: false,
    includeFiltersInQuery: false,
    spannedEventPlacement: 'AllDayRow',
    tooltipTemplate: undefined,
    resourceColorField: 'Calendars',
    fields: fields
  };

  // You can also create a more sophisticated version that checks for devices/browsers
  const getDetailedDisplayMode = (): string => {
    // Check for touch support
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || (navigator as any).msMaxTouchPoints > 0;

    // Check for mobile user agent
    const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    // Check screen width
    const width = window.innerWidth;

    if ((isTouchDevice || isMobileUA) && width <= 480) {
      return 'mobile';
    } else if ((isTouchDevice || isMobileUA) && width <= 1024) {
      return 'tablet';
    } else {
      return 'desktop';
    }
  };

  useEffect(() => {
    selectedCategories.current = [...initialCategories];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array means this runs once on mount

  const group: GroupModel = {
    allowGroupEdit: false,
    headerTooltipTemplate: checkboxStates.resourceheader ? headerTooltipCustoizedTemplate : ''
  };

  const memoizedSchedule = useMemo(() => {
    return (
      <>
        <ScheduleOverview></ScheduleOverview>
        <RenderColorPickerTooltip></RenderColorPickerTooltip>
      </>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const memoizedGrid = useMemo(() => {
    return (
      <SearchGridDialog></SearchGridDialog>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showSearchDialog]);

  return (
    <>
      <div id="overalContainer" onClick={(e: any) => { removeWalkthrough(e) }}>
        <div className="App overlay">
          {stepIndex >= 0 && stepIndex < steps.length && (
            <div className="walkthrough-display-data-overlay" />
          )}
          <AppBarComponent colorMode="Dark" cssClass="appbar">
            <div className="syncfusion-logo">
              <a className="sync-logo-img" title="Syncfusion" aria-label="Syncfusion logo" href="https://www.syncfusion.com/">
              </a>
            </div>
            <div className="e-appbar-separator"></div>
            <div>
              <span className="title">Feature Rich React Schedule</span>
            </div>

            {isDesktop && (
              <>
                <div id="github" className={localization.current === 'ar' ? 'desktop-only-rtl' : 'desktop-only'}>
                  <span className="githubdemo"> <span> <i className="fab fa-github"></i> </span>
                    <a href="https://github.com/SyncfusionExamples/react-feature-rich-schedule" target="_blank" rel="noopener noreferrer"
                      style={{ textDecoration: 'none', color: 'white', fontSize: '15px' }}>GitHub</a></span>
                </div>

                <div id="menu" className="desktop-only">
                  <MenuComponent id="listmenu" ref={(list: any) => menuRef = list}
                    items={menuItems}
                    showItemOnClick={true}
                    fields={menuAppBarFields}
                    template={menuTemplate}
                    cssClass="e-template-menu"
                    onOpen={() => {
                      isMenuDesktopOpened = true;
                    }}
                  ></MenuComponent>
                </div>
                <div id="demo" className="desktop-only">
                  <a
                    id="book-free-demo" target="_blank"
                    href="https://www.syncfusion.com/request-demo"
                  >
                    <span className="bookdemo">BOOK A FREE DEMO</span>
                  </a>
                </div>
                <div id="tryfreebutton" className="desktop-only">
                  <a
                    id="download-now-button" target="_blank"
                    href="https://www.syncfusion.com/downloads/react?tag=es-livesample-react-featurerich-schedule"
                    className="menu-item btn btn-primary"
                  >
                    <span className="tryfree">TRY IT FREE</span>
                  </a>
                </div>
              </>
            )}

            {/* Hamburger icon for mobile */}
            <div className={localization.current === 'ar' ? 'hamburger mobile-only-rtl' : 'hamburger mobile-only'}
              onClick={() => {
                setMobileMenuOpen(!mobileMenuOpen)
              }
              }
            >
              ☰
            </div>

          </AppBarComponent >

          {/* Popup menu for mobile */}

          {mobileMenuOpen && (<div className="popup-menu mobile-only">

            <div id="github" className="mobile-only" style={{ display: 'flex', alignItems: 'center' }}>
              <span className="githubdemo" style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ padding: '2px', color: 'white' }}>
                  <i className="fab fa-github"></i>
                </span>
                <a
                  href="https://github.com/SyncfusionExamples/react-feature-rich-schedule"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', color: 'white', fontSize: '15px', marginLeft: '5px' }}>GitHub</a></span>
            </div> <hr className="separator-line-mobile" />
            <div id="menumobile" className="mobile-only">
              <MenuComponent id="listmenu" ref={(list: any) => menuMobileRef = list}
                items={menuItems}
                showItemOnClick={true}
                enableScrolling={true}
                fields={menuAppBarFields}
                template={menuTemplate}
                cssClass="e-template-menu"
                onOpen={() => {
                  isMenuMobileOpened = true;
                }}
                beforeOpen={(e) => {
                  if (e.parentItem.category === 'LEARNING') {
                    (closest(e.element, '.e-menu-wrapper') as HTMLElement).style.height = '250px';
                  }
                  const menuWrapper = document.getElementById("menumobile");
                  if (menuWrapper) {
                    (menuWrapper as HTMLElement).style.setProperty('height', '300px', 'important');
                  }
                }}
                beforeClose={(e) => {
                  const menuWrapper = document.getElementById("menumobile");
                  if (menuWrapper) {
                    (menuWrapper as HTMLElement).style.setProperty('height', '');
                  }
                }}
              ></MenuComponent>
            </div>
            <hr className="separator-line-mobile" />
            <div id="demo" className="mobile-only">
              <a
                id="book-free-demo" target="_blank"
                href="https://www.syncfusion.com/request-demo"
              >
                <span className="bookdemo">BOOK A FREE DEMO</span>
              </a>
            </div> <hr className="separator-line-mobile" />
            <div className="mobile-only">
              <a
                id="download-now-button" target="_blank"
                href="https://www.syncfusion.com/downloads/react?tag=es-livesample-react-featurerich-schedule"
                className="btn btn-free bold free-trial-gtag-sep15"
              >
                <span className="tryfree">TRY IT FREE</span>
              </a>
            </div>
          </div>
          )}
        </div>
        {memoizedSchedule}
        {memoizedGrid}
        {stepIndex >= 0 && stepIndex < steps.length && (
          <>
            <div className="walkthrough-tooltip">
              <div
                className={'walkthrough-tooltip-' + steps[stepIndex].arrowPosition}
                style={{
                  top: position.top,
                  left: position.left,
                  display: position.top === 0 && position.left === 0 ? 'none' : 'block',
                  padding: '8px 16px 8px 16px',
                  background: '#f9f9f9',
                  borderRadius: '8px',
                  minWidth: '300px',
                }}
              >
                <button className="tooltip-close" onClick={closeTooltip}>×</button>

                {/* Slide content with arrows inside */}
                <div className="walkthrough-text" style={{ fontSize: '14px', marginBottom: '20px', position: 'relative', padding: '0 30px' }}>
                  <span className="inner-arrow left-arrow" onClick={prevStep} style={{
                    position: 'absolute',
                    left: 0,
                    top: '65%',
                    transform: 'translateY(-50%)',
                    fontSize: '14px',
                    color: '#888',
                    cursor: 'pointer'
                  }}>&#10094;</span>

                  {steps[stepIndex].content}

                  <span className="inner-arrow right-arrow" onClick={nextStep} style={{
                    position: 'absolute',
                    right: 0,
                    top: '65%',
                    transform: 'translateY(-50%)',
                    fontSize: '14px',
                    color: '#888',
                    cursor: 'pointer'
                  }}>&#10095;</span>
                </div>

                {/* Navigation dots */}
                <div
                  className="walkthrough-footer"
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '12px',
                    flexDirection: 'column'
                  }}
                >
                  <div
                    className="walkthrough-dots"
                    style={{ display: 'flex', gap: '8px' }}
                  >
                    {steps.map((_, idx) => (
                      <span
                        key={idx}
                        onClick={() => setStepIndex(idx)}
                        className={`walkthrough-dot ${idx === stepIndex ? 'active' : ''}`}
                        style={{
                          width: '10px',
                          height: '10px',
                          borderRadius: '50%',
                          backgroundColor: idx === stepIndex ? 'blue' : 'gray',
                          display: 'inline-block',
                          cursor: 'pointer'
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;

interface CheckboxConfig {
  id: string;
  label: string;
  defaultChecked?: boolean;
  type?: string;
  dropdownDataSource?: { [key: string]: Object }[] | string[] | number[] | boolean[];
  dropdownFields?: FieldSettingsModel;
  dropdownValueTemplate?: string | Function;
  dropdownItemTemplate?: string | Function;
  timePickerValue?: Date;
  multiselectDropDownvalue?: number[] | string[] | boolean[] | object[] | null;
  dropdownWithCheckboxId?: string;
  dropdownValue?: number | string | boolean | object | null;
  workStartHourLabel?: string;
  workEndHourLabel?: string;
  workStartHourValue?: Date;
  workEndHourValue?: Date;
  maxDateLabel?: string;
  minDateLabel?: string;
  maxDateValue?: Date;
  minDateValue?: Date;
  displayDateValue?: Date;
  timePickerFloatLabelType?: FloatLabelType | string;
  multiselectShowSelectAll?: boolean;
  numericTextboxformat?: string;
  numericTextboxvalue?: number;
  numericTextboxMin?: number;
  numericTextboxMax?: number;
  buttonContent?: string;
  template?: JSX.Element;
  resourceStartHourTimePickerReference?: React.RefObject<TimePickerComponent>;
  resourceEndHourTimePickerReference?: React.RefObject<TimePickerComponent>;
  resourceWorkDaysReference?: React.RefObject<MultiSelectComponent>;
  checkboxReference?: React.RefObject<CheckBoxComponent>;
}

interface CheckboxGroup {
  groupField: string;
  items: CheckboxConfig[];
}

interface CheckboxConfigurations {
  [key: string]: (CheckboxConfig | CheckboxGroup)[];
}

interface EventProps {
  Subject: string;
  StartTime: Date;
  EndTime: Date;
  PrimaryColor: string;
  SecondaryColor: string;
  Description: string;
  EventType: string;
  CalendarId: number;
}