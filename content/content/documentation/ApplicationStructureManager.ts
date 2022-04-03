import {DocumentationItemContent} from "../models/DocumentationItemContent";
import {DocumentationKeysContentManager} from "./DocumentationKeysContentManager";

export class ApplicationStructureManager {
    public static getItems(): Array<DocumentationItemContent> {
        return [
            new DocumentationItemContent(DocumentationKeysContentManager.TITLE, "Application Structure"),
            new DocumentationItemContent(DocumentationKeysContentManager.MEDIUM_DESCRIPTION, "Vanite Described By Images and Flows"),
            new DocumentationItemContent(DocumentationKeysContentManager.DESCRIPTION_TITLE, "Application Files Structure"),
            new DocumentationItemContent(DocumentationKeysContentManager.DESCRIPTION, "Vanite Built To Be on Multi Modular Apps As Described Previously With the Following Modules Structure"),
            new DocumentationItemContent(DocumentationKeysContentManager.IMAGE, "https://user-images.githubusercontent.com/29167110/159060203-37b36b3e-e479-46cf-a502-749dff1c159a.png"),

        ];
    }
}