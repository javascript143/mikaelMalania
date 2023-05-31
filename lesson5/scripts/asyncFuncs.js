async function asyncFunc() {
    await setTimeout(() => {
        console.log('Download Complete');
    }
    , 3000);

    console.log('Download Started');
}

