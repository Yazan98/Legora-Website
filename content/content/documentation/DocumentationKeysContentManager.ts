import {DocumentationItemContent} from "../models/DocumentationItemContent";
import {ApplicationStructureManager} from "./ApplicationStructureManager";

export class DocumentationKeysContentManager {

    public static TITLE = "title";
    public static DESCRIPTION = "description";
    public static MEDIUM_DESCRIPTION = "medium_description";
    public static DESCRIPTION_TITLE = "title_description";
    public static IMAGE = "image";
    public static LIST = "list";

    public static getContentByKey(key: string): Array<DocumentationItemContent> {
        switch (key) {
            case "home": return this.getRootDocumentationElements();
            case "structure": return ApplicationStructureManager.getItems();
            default: return this.getDefaultItems();
        }
    }

    private static getDefaultItems(): Array<DocumentationItemContent> {
        return [
            new DocumentationItemContent(DocumentationKeysContentManager.TITLE, "Vanite Documentation"),
            new DocumentationItemContent(DocumentationKeysContentManager.DESCRIPTION_TITLE, "Coming Soon"),
            new DocumentationItemContent(DocumentationKeysContentManager.DESCRIPTION, "This Content is Still Not Available at Vanite, You Can See Other Sections To Read about Vanite More")
        ]
    }

    private static getRootDocumentationElements(): Array<DocumentationItemContent> {
        return [
            new DocumentationItemContent(DocumentationKeysContentManager.TITLE, "Vanite Documentation"),
            new DocumentationItemContent(DocumentationKeysContentManager.MEDIUM_DESCRIPTION, "A Ready State and Utility Classes To Build Android Applications"),
            new DocumentationItemContent(DocumentationKeysContentManager.DESCRIPTION_TITLE, "Vanite Description"),
            new DocumentationItemContent(DocumentationKeysContentManager.DESCRIPTION, "Vanite is a Project Starter To Build Android Application with Ready State Management and " +
                "Utility Classes Also to Provide an Abstract Code Inside Base Code To make it Easy to Implement in Client Apps, And it focus on MVVM and Redux Structure While Providing State Management" +
                " And Depending on Fragments as a Start Point As a User Interface Layer To communicate with Domain Layer to Execute the Logic then Move to Data Layer, " +
                "Vanite Split this Implementation via Dependencies to Include the required Component in Specific Module in this case Vanite Can work with Single or Multi Modular Applications"),
            new DocumentationItemContent(DocumentationKeysContentManager.DESCRIPTION_TITLE, "Where To Start"),
            new DocumentationItemContent(DocumentationKeysContentManager.DESCRIPTION, "Before You Start you need to understand how to Structure " +
                "The Application Files, Modules and the Application Flow of the Components, By reading the Following Image " +
                "that describe the Application Flow and How Components Connected To Each other"),
            new DocumentationItemContent(DocumentationKeysContentManager.IMAGE, "https://user-images.githubusercontent.com/29167110/159035682-297d55fe-a4ea-4b80-a3fd-917814561cf3.png", null, true),
            new DocumentationItemContent(DocumentationKeysContentManager.DESCRIPTION_TITLE, "Vanite Components"),
            new DocumentationItemContent(DocumentationKeysContentManager.DESCRIPTION, "Vanite Is Depending on 3 Main Layers as Described before and All of them Could be Modules or Packages And The Library Provide Several Components To Build Completely Android Applications"),
            new DocumentationItemContent(DocumentationKeysContentManager.LIST, "", ["Gradle Dependencies", "CLI Generator", "Intellij Plugin", "Online Generator", "Gradle Plugin Dependencies"])
        ];
    }

}
