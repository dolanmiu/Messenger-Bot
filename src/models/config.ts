export interface Config {
  events: Event[];
}

export interface Event {
  name: string;
  cron: string;
  message: string;
}
