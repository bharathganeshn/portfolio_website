import { Code } from "lucide-react";



export const AboutSection = ()=>{
    
    return(
        <section id='about' className="py-24 px-24 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Passoinate Tech Enthusisat</h3>

                        <p className="text-muted-foreground">
                            I'm Passoinate about learning new Technologies and applying them in 
                            the real world problems and stay at forefront in ever-evolving web landscape.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Contact Us
                            </a>
                            <a href="" className="cosmic-button">
                                View My Resume
                            </a>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primeary/10"> 
                                    <Code className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Web Development</h4>
                                    <p className="text-foreground">
                                        Creating a responsive Website by using
                                        Web Technologies and AI.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primeary/10"> 
                                    <Code className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Data Structers</h4>
                                    <p className="text-foreground">
                                        Solving the problems on Competitive coding 
                                        platforms.
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>

            </div>
        </section>
    );
}