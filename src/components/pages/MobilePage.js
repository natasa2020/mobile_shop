import React from "react";
import MobilesData from "../pages/mobiles.json"
import Mobile from "../Mobile";

class MobileList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            "mobiles" : MobilesData.mobile_phones
          }
    }

    render() {
        const mobileComponents = this.state.mobiles.map((mobile) => (
            <Mobile mobile = {mobile} key = {mobile.id} />
          ));
        return (
            <div className = "MobileShop">
                { mobileComponents }
            </div>
        )
    }
}


export { MobileList as default };