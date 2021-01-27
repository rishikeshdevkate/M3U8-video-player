import {
  Component,
  OnInit,
  OnDestroy,
  AfterViewInit,
  ElementRef,
  Input,
} from "@angular/core";

declare const videojs: any;
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit, AfterViewInit {
  // reference to the element itself, we use this to access events and methods
  private _elementRef: ElementRef;

  seekbarTracker: any = {
    duration: 0,
    time: 0,
    seekPercent: 0,
    hasDVR: false,
  };
  currentTime;
  seekTime: number;
  // // video asset url
  // @Input() url: any;

  // declare player var
  private player: any;
  totalTime;

  // constructor initializes our declared vars
  constructor(elementRef: ElementRef) {
    // this.url = false;

    this.player = false;
  }

  ngOnInit() {}

  // use ngAfterViewInit to make sure we initialize the videojs element
  // after the component template itself has been rendered

  ngAfterViewInit() {
    const self = this;
    this.player = videojs(document.getElementById("sxmvideo"));
    console.log(this.player);
    this.player.muted(true);
    this.player.on("timeupdate", () => {
      let hasDVR = false;
      let duration = Math.floor(this.getDuration(this.player) * 1000);
      let time;
      let seekPercent;
      // this.player.controls(true);
      console.log(this.player.currentTime(), this.getDuration(this.player));
      this.currentTime = this.player.currentTime();
      this.totalTime = duration;
    });
  }
  getTimeInMinute(timeInMilli) {
    let seconds = timeInMilli / 1000;
    let minutes = seconds / 60;
    return minutes.toFixed(2);
  }
  getDuration(player) {
    var seekable = player.seekable();
    console.log(
      "seekable.end(0) - seekable.start(0)",
      seekable.end(0),
      seekable.start(0)
    );
    return seekable && seekable.length
      ? seekable.end(0) - seekable.start(0)
      : 0;
  }

  onSeekPercentChange(player, seekPercent, duration) {
    var seekable = player.seekable();

    if (seekable && seekable.length) {
      // constrain currentTime
      player.currentTime(
        Math.max(
          0,
          Math.min(seekable.end(0), seekable.start(0) + seekPercent * duration)
        )
      );
    }
  }

  isLive() {
    if (!isFinite(this.player.duration())) {
      return true;
    }

    var acceptableDelay = 30;
    var seekable = this.player.seekable();
    return (
      seekable &&
      seekable.length &&
      seekable.end(0) - this.player.currentTime() < acceptableDelay
    );
  }

  ngOnDestroy() {
    // this.player.dispose();
  }

  seek(n) {
    this.player.currentTime(this.seekTime || 1266);
  }
  play(n) {
    if (this.player.paused()) {
      this.player.play();
    } else {
      this.player.pause();
    }
  }

  create() {
    this.player.src({
      type: "application/x-mpegURL",

      src: "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8",
    });
    this.player.play();
  }

  destroy() {}
}
