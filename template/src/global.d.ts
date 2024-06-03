import type { Uni as _Uni } from "@dcloudio/types";
import type { AbstractHistory } from "../../uniapp-demo/src/uni-simple-router";
import type { ProcessEngine } from "./core";

declare global {
  interface Uni extends _Uni {
    $LXEngine: ProcessEngine;
    $l: any;
    $system: any;
    $Router: AbstractHistory;
  }
}
