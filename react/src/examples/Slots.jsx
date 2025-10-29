import Slot from "./Slot";

export default function Slots() {
    return (
        <>
            <Slot header={<span>AAAAA</span>} body={<div>aaaaa</div>} />
            <Slot header={<span>BBBBB</span>} body={<div>bbbbb</div>} />
            <Slot header={<span>CCCCC</span>} body={<div>ccccc</div>} />
        </>
    );
}
