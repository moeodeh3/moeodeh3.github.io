

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];


export const info = {
    firstName: "Mohammed",
    lastName: "Odeh",
    position: "a Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'Fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'Based in Canada'
        },
        {
            emoji: "💼",
            text: "Student at University of Windsor"
        },
        {
            emoji: "📧",
            text: "moeodeh393@gmail.com"
        }
    ],
    socials: [ 
        {
            link: "https://github.com/moeodeh3",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/moe-odeh/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com/Moe_Odeh3",
            icon: "fa fa-twitter",
            label: 'twitter'
        },
        {
            link: "./resume.pdf",
            icon: "fa fa-file-alt",
            label: 'twitter'
        }

    ],

   
}
