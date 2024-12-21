async function* asyncGenerator() {
    let i = 0;
    while (i < 3) {
        yield new Promise(resolve => setTimeout(() => resolve(i++), 1000));
    }
}

async function processGenerator() {
    const generator = asyncGenerator();
    let next = generator.next();  // Start the generator

    while (!next.done) {
        next = await next;  // Await the promise from generator
        console.log(next.value);  // Output the resolved value
        next = generator.next();  // Move to the next iteration
    }
}

processGenerator();
