import {
  Component,
  Prop,
  Watch,
  Method,
  State,
  Event,
  EventEmitter
} from '@stencil/core';

@Component({
  tag: 'echo-plex',
  shadow: true
})
export class MyComponent {
  // Exposed as element attrs/props
  @Prop() signal: string;

  // Internal only
  @State() delayTime = 2000;

  // regular class member
  private intervalRef;

  @Event() echoEmitted: EventEmitter;

  @Method()
  setDelayTime(val: number) {
    this.delayTime = val;
    this.createInterval();
  }

  // Lifecycle hook
  componentDidLoad() {
    this.createInterval();
  }

  // random class method
  createInterval() {
    clearInterval(this.intervalRef);
    this.intervalRef = setInterval(
      () => this.echoEmitted.emit(this.signal),
      this.delayTime
    );
  }

  // prop observer
  @Watch('signal')
  onSignalChange(newVal: string, oldVal: string) {
    console.log(`signal changed in component, ${newVal}, ${oldVal}`);
  }

  // render
  render() {
    return <div>{this.signal}</div>;
  }
}
