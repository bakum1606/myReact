import React, {useState} from 'react'
import {create} from "react-test-renderer";
import Paginator from "./Paginator";



describe("Paginator component test", () => {
    test("page count should be only 10", () => {
        const component = create(<Paginator itemsTotalCount={11} pageSize={1} portionSize ={10}/>);
        const root = component.root;
        let spans = root.findAllByType("span");
        expect(spans.length).toBe(10);
    })

    test("if page count mo then  10 button NEXT should be present", () => {
        const component = create(<Paginator itemsTotalCount={11} pageSize={1} portionSize ={10}/>);
        const root = component.root;
        let button = root.findAllByType("button");
        expect(button.length).toBe(1);
    });
});