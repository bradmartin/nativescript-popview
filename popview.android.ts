/***************************************************************************************
* Made for the {N} community by Brad Martin @BradWayneMartin
* https://twitter.com/BradWayneMartin
* https://github.com/bradmartin
* http://bradmartin.net
* Open Source Lib : https://github.com/krishnarb3/Popview-Android
*************************************************************************************/

import { View } from "ui/core/view";
import { platformNames } from "platform";
import * as app from "application";

declare var rb: any;

export class PopView {
    private _PopField: rb.popview.PopField;

    constructor() {
        if (!platformNames.android) return;

        let activity = app.android.foregroundActivity || app.android.startActivity;
        this._PopField = new rb.popview.PopField(activity);
    }

    public pop(view: any) {
        this._PopField.popView(view.android);
    }
 
    public popAndReplace(view: any, newView: any) {
        try {
            this._PopField.popView(view.android, newView.android, true);
        } catch (err) {
            console.log(err);
        }
    }


}