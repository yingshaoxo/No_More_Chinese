function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function wait_until_it_is_not_null(obj) {
    while (obj == null) {
        await sleep(200)
    }
}

async function main() {
    await wait_until_it_is_not_null(document.body)

    document.body.style.visibility = "hidden";
}

main();


