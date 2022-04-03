import {ServiceModel} from "./models/ServiceModel";

export class HomeServicesContent {

    public static TITLE = "Library Components";
    public static DESCRIPTION = "Vanite Library Components To Build Android Applications Faster";

    public static DEPENDENCIES_TITLE = "Library Dependencies";
    public static DEPENDENCIES_DESCRIPTION = "Full List of Vanite Dependencies Can be Included in Android Applications";

    public static getDependenciesList(): Array<ServiceModel> {
        return [
            new ServiceModel("Vanite Dependency", "Library Core", "This Dependency Has all Models, ViewModels, Interfaces to implement From All Childs in Other Modules"),
            new ServiceModel("Vanite UI Dependency", "User Interface", "This Dependency Has all UI Integration for Base Code in Activities, Fragments, Fragment Manager, Toasts, SnakeBar"),
            new ServiceModel("Vanite Binding Dependency", "User Interface", "This Dependency is Depending on Vanite UI Dependency With Support of ViewBinding to Add Your Binding Layouts in Base Fragments"),
            new ServiceModel("Vanite Data", "Library Data", "This Dependency Has all Data Classes Needed to Build Data Layer from Repositories, Interfaces, Mappers, Retrofit, RxJava 2"),
            new ServiceModel("Vanite Utils", "Utility Classes", "Loading Images, RecyclerView Decoration, Load Gif Images, TextWatcher, App Class Config, Language, Device Info, WebView"),
            new ServiceModel("Vanite Prefs", "Shared Preferences", "Utility Classes to Access Shared Preferences Keys Within, Without Coroutines Scope in Any Layer, Setup in App Class"),
            new ServiceModel("Vanite Logs", "Logging", "Vanite Support Different Types of Logging With Custom Style and Kotlin Syntax by Using Inline, Infix Functions for better Logging"),
            new ServiceModel("Vanite Firebase", "Firebase", "Small Set of Classes to Help in Configuring Firebase like Notification, Auth, Firestore, Crashlytics"),
            new ServiceModel("Vanite Permissions", "Permissions", "Handle Permissions By Permission Manager in Fragments, Activities Via Callbacks"),
        ];
    }

    public static getServices(): Array<ServiceModel> {
        return [
            new ServiceModel("Android Development", "Kotlin Language", "This Library Built with Kotlin Programming Language That Support Single, Multi Modular Applications"),
            new ServiceModel("Execute Tasks", "Multi Threading", "This Library Built with Kotlin coroutines and RxJava 2 Support to Multi Threading in ViewModels To Execute Background, Heavy Tasks, Utility Classes"),
            new ServiceModel("Multi Modular Apps", "Modular Application", "Build Applications Depends on 3 Main Modules (UI, Data, Domain) To Separate The Code Between Modules and Each Module has it's Own Logic"),
            new ServiceModel("Architecture", "Apps Structure", "Apps Built With Vanite Depends on MVVM and Redux Mixed Together to Build Screens With Ready State Management"),
            new ServiceModel("Online Generator", "Project Starter", "Vanite Has Project Generator Built in The Website To Generate Project Files on Server"),
            new ServiceModel("CLI Generator", "Project Starter", "Vanite Has Project Generator Built in The Terminal To Generate Project Files on Server Via Npm"),
        ];
    }
}