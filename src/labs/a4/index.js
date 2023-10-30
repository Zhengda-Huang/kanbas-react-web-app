import React from "react";
import Add from "./Add";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PasingFunctions";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariables from "./ObjectStateVariables";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponet";
import ReduxExamples from "./ReduxExamples";
import AddRedux from "./ReduxExamples/AddRedux";

const Assignment4 = () => {
    function sayHello() {
        alert("Hello");
    }

    return(
        <>
            <h1>Assignment 4</h1>
            <ReduxExamples/>
            <AddRedux/>
            <ParentStateComponent/>
            <ArrayStateVariable/>
            <ObjectStateVariables/>
            <DateStateVariable/>
            <StringStateVariables/>
            <BooleanStateVariables/>
            <Counter/>
            <EventObject/>
            <PassingFunctions theFunction={sayHello} />
            <PassingDataOnEvent/>
            <ClickEvent/>
            <Add a={1} b={2} />
        </>
    );
};
export default Assignment4;