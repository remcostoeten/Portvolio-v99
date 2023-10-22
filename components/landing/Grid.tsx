import React from "react";
import CompanyIcons from "../icons/icons";
import Icon from "../icons/icons";
import { GridItemsData, WorkExperience } from "@/lib/experience";
import ExperienceItems from "./ExperienceItems";
import GridCard from "./GridCard";

type blockProps = {
    children: React.ReactNode;
};

const GridItem = ({ children }: blockProps) => (
    <div className="bg-grid perspective flex h-[161px] flex-col grow shrink-0 basis-auto flex-1 rounded-16 justify-center items-center gap-y-4">
        {children}
    </div>
);

export default function Grid() {
    return (
        <div className="px-5">
            <section className="flex max-md:flex-col gap-l max-md:items-stretch">
                <div className="flex flex-col items-stretch max-md:w-full">
                    <div className="flex grow flex-col gap-m">
                        <div className="bg-grid gap-s self-stretch w-full justify-center items-center flex flex-col p-3.5 rounded-16">
                            <ExperienceItems />
                        </div>
                        <div className="self-stretch gap-m flex items-center justify-center">
                            {GridItemsData.map((data, index) => (
                                <GridItem key={index}>
                                    <h4 className="text-16 text-color-light">{data.title}</h4>
                                    <h3 className="text-color text-22 text-2xl font-black">{data.count}</h3>
                                </GridItem>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-stretch w-[67%] max-md:w-full">
                    <div className="flex gap-l grow flex-col w-[741px] max-md:max-w-full">
                        <div className="self-stretch max-md:max-w-full">
                            <section className="flex max-md:flex-col max-md:items-stretch gap-l">
                                <div className="flex flex-col items-stretch max-md:w-full">
                                    <div className="border bg-grid flex flex items-center justify-center w-[270px] max-w-full grow flex-col rounded-16 ">
                                        <Icon src="gitlab" alt="GitLab Icon" width={110} height={110} />
                                    </div>
                                </div>
                                <div className="flex flex-col items-stretch max-md:w-full w-screen">
                                    <div className="border bg-grid flex h-[234px] flex-col rounded-16 border-solid border-white border-opacity-0 max-md:max-w-full w-full overflow-hidden">
                                        <GridCard />
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div className="border bg-neutral-200 self-stretch flex w-full flex-col-reverse rounded-16 border-solid border-white border-opacity-0 max-md:max-w-fullC h-full"></div>
                    </div>
                </div>
            </section>
        </div>
    );
}