import { Plugin, WorkspaceLeaf } from 'obsidian'
import View from 'src/View'
import { VIEW_TYPE } from 'src/constants'

export default class Diff extends Plugin {
  settings: {
    showRibbonIcon: boolean
  }

  async onload() {
    this.registerView(VIEW_TYPE, (leaf: WorkspaceLeaf) => new View(leaf))
  }

  onunload() {}
}
