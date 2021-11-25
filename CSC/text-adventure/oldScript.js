console.log('live reload works!');

// Button colors
let confirmBtnColor = '#abcf93';
let denyBtnColor = '#cc6c6c';
let decisionBtnColor = '#292929';

// i might use this or the sweetalerts option
function changeBackground(imgPath) {

    const background = document.getElementById('background');
    background.style.backgroundImage = `url(${imgPath})`;

}

// goldylocks images are placeholders

// you are stuck in a room and need to escape so you wont die (Suffocation)
// to escape you need to solve 3-5 riddles like choose one of three items, what passphrase, ...
// to advance a layer to freedom
// img might be problem
// img: simple room and you add items to it as story progresses

// Basically the whole game
function initGame() {
    Swal.fire({

        title: `Wanna go for a walk in the woods?`,
        text: 'What do you say?',
        icon: 'info',
        confirmButtonText: `Let's go!`,
        confirmButtonColor: confirmBtnColor,
        // showCancelButton: true,
        // cancelButtonText: `I'd rather not.`,
        // cancelButtonColor: cancelBtnColor,
        showDenyButton: true,
        denyButtonText: `I'd rather not.`,
        denyButtonColor: denyBtnColor,

    }).then((result) => {

        if (result.isConfirmed) {

            Swal.fire({

                title: `Let's go`,
                text: 'You wander in the woods and see two paths, which one will you take?',
                icon: 'question',
                confirmButtonText: 'Left',
                confirmButtonColor: decisionBtnColor,
                showDenyButton: true,
                denyButtonText: 'Right',
                denyButtonColor: decisionBtnColor,

            }).then((result) => {
                if (result.isConfirmed) {
                    
                    Swal.fire({

                        title: `You went left.`,
                        html: 'You move along and see a small house in the distance, what do you do?<strong><p>A) Go inside</p><p>B) Ignore it</p><p>C) Call the police</p></strong>',
                        icon: 'question',
                        input: 'text',
                        inputPlaceholder: "Answer with A, B or C.",
                        // imageUrl: './img/B_cabin.jpg',
                        // imageAlt: 'A tall image',
                        confirmButtonText: `OK`,
                        confirmButtonColor: confirmBtnColor,

                    }).then((result) => {

                        if (result.value === null) return false;

                        console.log(result.value);

                        switch (result.value.toLowerCase()) {
                            case 'a':
                                // changeBackground('./img/B_cabin.jpg');
                                Swal.fire({
                                    imageUrl: './img/B_cabin.jpg',
                                    imageAlt: 'A tall image'
                                })
                                break;

                            case 'b':
                                console.log('a');
                                break;

                            case 'c':
                                console.log('a');
                                break;
                        
                            default:
                                break;
                        }

                    })
                } else if (result.isDenied) {
                    Swal.fire({

                        title: `You went right.`,
                        text: 'Should have gone left because this path is muddy and your shoes are stuck.',
                        icon: 'error',
                        confirmButtonText: `Goodbye`,
                        confirmButtonColor: denyBtnColor,

                    })
                }
            })

        } else if (result.isDenied) {
            Swal.fire({

                title: `:(`,
                text: 'Oh well...',
                icon: 'error',
                confirmButtonText: `Goodbye`,
                confirmButtonColor: denyBtnColor,

            })
        }
    })
}

