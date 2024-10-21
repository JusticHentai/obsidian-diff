import { App, Plugin, PluginSettingTab, Setting, WorkspaceLeaf } from 'obsidian'
import View from 'src/View'
import {
  DEFAULT_SETTINGS,
  ICON,
  OPEN_VIEW_COMMAND,
  RIBBON_DESC,
  VIEW_TYPE,
} from 'src/constants'
import openView from 'src/utils/openView'

export default class Diff extends Plugin {
  settings: {
    showRibbonIcon: boolean
  }


  async onload() {
    await this.loadSettings()

    this.registerView(VIEW_TYPE, (leaf: WorkspaceLeaf) => new View(leaf))



  }

  onunload() {}
}
