import { customElement } from "solid-element";
import { createSignal } from "solid-js";
import globalCSS from "../index.css?inline";

function CnButton(props: { someProp: string; onClick?: () => void; class?: string; disabled?: boolean; }) {
    const [isDisabled] = createSignal(props.disabled || false);
    return (
        <>
            <style>{globalCSS}</style>
            <button
                class={`px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 ${props.class || ""
                    } ${isDisabled() ? "opacity-50 cursor-not-allowed" : ""}`}
                disabled={isDisabled()}
                onClick={() => {
                    if (!isDisabled() && props.onClick) {
                        props.onClick();
                    }
                }}
            >
                {props.someProp}
            </button>
        </>
    );
}

customElement("cn-button", { someProp: "Click me", class: "", disabled: false }, CnButton);
