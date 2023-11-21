import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export const personalData = {
    name: 'Remco Stoeten',
    fullname: 'remcostoeten',
    website: 'https://remcostoeten.nl',
    employer: 'Pleio',
    jobtitle: 'Front end developer',
    location: 'Lemmer, The Netherlands / Remote',
    email: 'stoetenremco.rs@gmail.com',
    social: {
        linkedin: 'https://www.linkedin.com/in/remco-stoeten/',
        github: 'https://github.com/remcostoeten',
        gitlab: 'https://gitlab.com/remcostoeten',
    },
    about: {
        title: 'About me',
    }
}import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export const personalData = {
    name: 'Remco Stoeten',
    fullname: 'remcostoeten',
    website: 'https://remcostoeten.nl',
    employer: 'Pleio',
    jobtitle: 'Front end developer',
    location: 'Lemmer, The Netherlands / Remote',
    email: 'stoetenremco.rs@gmail.com',
    social: {
        linkedin: 'https://www.linkedin.com/in/remco-stoeten/',
        github: 'https://github.com/remcostoeten',
        gitlab: 'https://gitlab.com/remcostoeten',
    },
    about: {
        title: 'About me',
        short: (
            <>
                I'm recovering ex-magento developer. I've
                <Tooltip>
                    <TooltipTrigger>overcome PHP</TooltipTrigger>
                    <TooltipContent>
                        <p className="lowercase">Those 5 years of magento we're hard, but I survived ❤️</p>
                    </TooltipContent>
                </Tooltip>
                and now building <a href='https://gitlab.com/pleio/frontend'>open source</a> software at <a href='https://gitlab.com/pleio'>Pleio</a>. I love CSS and UI. Primarily doing TSX, Next and SQL and have done some scripting in python and lua. In the future I want to dive into Go, OCaml and dev-ops
            </>
        ),
    }
}