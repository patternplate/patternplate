export interface PatternplatePlugin {
  path: string;
  plugin: {
    contributes?: {
      menus: MenuContribution[];
    }
    commands?: {
      [commandName: string]: {
        command: () => Promise<PluginResult>;
      }
    }
  }
}

export interface PluginResult {
  error?: Error;
}

export enum MenuContributonAnchor {
  Sidebar = 'sidebar',
  Toolbar = 'toolbar'
}

export interface MenuContribution {
  anchor: MenuContributonAnchor;
  command: string;
  title: string;
}
