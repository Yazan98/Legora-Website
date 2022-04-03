import {NavBarModel} from "./models/NavBarModel";

export class DocumentationNavBarContent {
    public static getNavBar(): Array<NavBarModel> {
        return [
            new NavBarModel("Vanite", "home", false, null),
            new NavBarModel("Application Structure", "structure", false, null),
            new NavBarModel("Installation", "installation", false, null),
            new NavBarModel("User Interface Components", "ui", true, DocumentationNavBarContent.getUserInterfaceChilds()),
            new NavBarModel("Data Layer Components", "data", true, DocumentationNavBarContent.getDataChilds()),
            new NavBarModel("Domain Components", "domain", true, DocumentationNavBarContent.getDomainChilds()),
            new NavBarModel("Utils Components", "utils", true, DocumentationNavBarContent.getUtilsChilds()),
            new NavBarModel("Logging Components", "logging", true, DocumentationNavBarContent.getLoggingChilds()),
            new NavBarModel("Shared Preferences Components", "prefs", false, null),
            new NavBarModel("Permissions Components", "permissions", false, null),
            new NavBarModel("Firebase Components", "firebase", false, null),
            new NavBarModel("Gradle Plugin", "plugin", false, null),
            new NavBarModel("Intellij Plugin", "intellij", false, null),
            new NavBarModel("CLI Generator", "generator", false, null),
        ];
    }

    private static getUserInterfaceChilds(): Array<NavBarModel> {
        return [
            new NavBarModel("UI Base Code", "uiComponents", false, null),
            new NavBarModel("UI Base Activities", "uiActivities", false, null),
            new NavBarModel("UI Base Fragments", "uiFragments", false, null),
            new NavBarModel("UI ViewBinding", "uiViewBinding", false, null),
        ];
    }

    private static getDataChilds(): Array<NavBarModel> {
        return [
            new NavBarModel("Data Base Code", "dataBaseCode", false, null),
            new NavBarModel("Base Repositories repos", "uiActivities", false, null),
            new NavBarModel("Base Executors", "executors", false, null),
            new NavBarModel("Base Interceptor", "interceptor", false, null),
            new NavBarModel("Base Memory", "memory", false, null),
            new NavBarModel("Base Utils", "dataUtils", false, null),
        ];
    }

    private static getDomainChilds(): Array<NavBarModel> {
        return [
            new NavBarModel("Domain Base Code", "domainBaseCode", false, null),
            new NavBarModel("Domain Actions", "domainActions", false, null),
            new NavBarModel("Domain State", "domainState", false, null),
            new NavBarModel("Domain Rx Providers", "domainRxProviders", false, null),
            new NavBarModel("Domain Errors", "domainErrors", false, null),
            new NavBarModel("Domain ViewModel", "domainViewModel", false, null),
            new NavBarModel("Domain Indirect ViewModel", "domainIndirectViewModel", false, null),
            new NavBarModel("Domain Multi ViewModel", "domainMultiViewModel", false, null),
            new NavBarModel("Domain Pure ViewModel", "domainPureViewModel", false, null),
            new NavBarModel("Domain Ready State ViewModel", "domainReadyStateViewModel", false, null),
            new NavBarModel("Domain Result ViewModel", "domainResultViewModel", false, null),
        ];
    }

    private static getUtilsChilds(): Array<NavBarModel> {
        return [
            new NavBarModel("Vanite Application", "vaniteApp", false, null),
            new NavBarModel("Vanite Configuration", "vaniteConfiguration", false, null),
            new NavBarModel("Notifications Controllers", "notificationController", false, null),
            new NavBarModel("Language Utils", "languageUtils", false, null),
            new NavBarModel("Picker File Manager", "PickerFileManager", false, null),
            new NavBarModel("Device Information", "deviceInformation", false, null),
            new NavBarModel("RecyclerView Decoration", "recyclerViewDecoration", false, null),
            new NavBarModel("WebView Controller", "webViewController", false, null),
            new NavBarModel("Animation Utils", "animationUtils", false, null),
            new NavBarModel("Gif Controller", "gifController", false, null),
            new NavBarModel("Google Map Builder", "googleMapsUtils", false, null),
            new NavBarModel("Pager Utils", "pagerUtils", false, null),
            new NavBarModel("Date Time Utils", "dateUtils", false, null),
            new NavBarModel("Keyboard Utils", "keyboardUtils", false, null),
            new NavBarModel("Location Utils", "locationUtils", false, null),
            new NavBarModel("RecyclerView Utils", "recyclerViewUtils", false, null),
            new NavBarModel("Screen Orientation Utils", "screenOrientationUtil", false, null),
            new NavBarModel("Screen Utils", "screenUtil", false, null),
            new NavBarModel("Vanite Device Utils", "deviceUtils", false, null),
            new NavBarModel("Gson Utils", "gsonUtils", false, null),
        ];
    }

    private static getLoggingChilds(): Array<NavBarModel> {
        return [
            new NavBarModel("Logging Base Code", "loggingBase", false, null),
            new NavBarModel("Logging Configuration", "loggingConfiguration", false, null),
            new NavBarModel("Logging Class", "loggingClass", false, null),
            new NavBarModel("Logging Exception", "loggingException", false, null),
        ];
    }

 }
