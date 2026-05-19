import he from "he";

function decodeHtml(encodedHTML) {
    return he.decode(encodedHTML);
}

export default decodeHtml;
