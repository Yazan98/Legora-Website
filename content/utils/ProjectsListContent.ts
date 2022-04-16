import {ProjectItem} from "../models/ProjectItem";

export class ProjectsListContent {
    public static getProjectsList(): Array<ProjectItem> {
        return [
            new ProjectItem("https://user-images.githubusercontent.com/29167110/163670048-76d6de3b-3eea-4c32-98b5-7454b8398afa.png", "Android Applications", "Generate Android Applications With Gradle, Firebase, Theme, Mainfest Code", "Available"),
            new ProjectItem("https://user-images.githubusercontent.com/29167110/163671048-9f575274-24d4-494a-bfbf-a0cdb42fda5b.png", "Gradle Plugins", "Generate Gradle Plugins For Android Applications", "Not Available"),
            new ProjectItem("https://user-images.githubusercontent.com/29167110/163671077-901367ee-f9c8-47d9-8cf9-459c0d9ecb74.png", "Jetpack Compose Desktop", "Generate Desktop Application in Kotlin Language With Config, Routers, Builds Ready", "Not Available"),
            new ProjectItem("https://user-images.githubusercontent.com/29167110/163671121-e15dacf3-3659-4b21-a41b-645f281fad05.png", "Ktor Applications", "Generate Web Application With Ktor Framework With Mysql Configurations, Routes, Exception Handling", "Not Available"),
            new ProjectItem("https://user-images.githubusercontent.com/29167110/163671159-6fbab9ab-e2c7-41c7-aaf0-37233d2f682b.png", "Nest Applications", "Generate Web Application With NestJs, Socket.io, Mongo DB, Routes Configuration", "Not Available"),
            new ProjectItem("https://user-images.githubusercontent.com/29167110/163671198-a8aacebb-905d-4853-bf2f-36779e0b7166.png", "NextJs Applications", "Generate Websites With Server Side Rendering, SEO, Pages, Tailwind Css", "Available"),
            new ProjectItem("https://user-images.githubusercontent.com/29167110/163671229-82f1f1d8-3fba-489c-b5fc-00a895d18f13.png", "ReactJs Applications", "Generate Websites With Client Side Rendering, SEO, Pages, Tailwind Css", "Available"),
            new ProjectItem("https://user-images.githubusercontent.com/29167110/163671242-1975f1da-ced1-49f7-a4d9-0fd971de7d33.png", "ReactJs Applications", "Generate Web App With Security, Routes, Exception Handling, Pagination, MySql, Kotlin Application", "Available"),
        ];
    }
}