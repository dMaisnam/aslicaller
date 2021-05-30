import { VscLoading } from "react-icons/vsc";

function Loading({ title }) {
    return (
        <section id="loading">
            <h4><span><VscLoading /></span> Loading {title} ...</h4>
        </section>
    );
}

export default Loading;