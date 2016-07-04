import { Observable, EventData } from 'data/observable';
import { Button } from "ui/button";
import { PopView } from 'nativescript-popview';
import { topmost } from "ui/frame";

export class HelloWorldModel extends Observable {
  private _PopView: PopView;

  constructor() {
    super();
    this._PopView = new PopView();
  }


  public pop(args: EventData) {
    let pv = new PopView();
    console.log('PopView: ' + pv);
    pv.pop(args.object);
    // this._PopView.pop(args.object);
  }

  public popReplace(args) {
    try {
      let pv = new PopView();
      console.log('PopView: ' + pv);
      let newBtn = topmost().currentPage.getViewById('newBtn');
      console.log('New View: ' + newBtn);
      pv.popAndReplace(args.object, newBtn);
    } catch (err) {
      console.log(err);
    }
  }


}