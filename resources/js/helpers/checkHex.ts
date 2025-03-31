export default function checkHex(string = '#000000') {
    return /^#[0-9A-F]{6}$/i.test(string) ? string : '#000000';
}
