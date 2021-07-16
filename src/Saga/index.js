import {all} from "@redux-saga/core/effects";
import actionWatcherView from "./SagaView";
export default function* (){
    yield all(
        [
           actionWatcherView()
        ]
    )
}