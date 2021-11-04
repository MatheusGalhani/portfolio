import React from 'react';
import { SectionDescription, SectionTitle } from '../../styles/section.styled';
import Circle from '../circle/circle';
import { itemSkillList } from './skill.model';
import {
    Container,
    SkillItem,
    SkillItemContent,
    SkillList,
    SkillsDescriptionContent,
} from './skill.styled';

const Skill: React.FC = () => {
    return (
        <Container id="skills">
            <SkillsDescriptionContent>
                <SectionTitle>Skills</SectionTitle>
                <SectionDescription>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam pretium bibendum ex non pretium. In nec pretium magna,
                    sed interdum tortor. Nullam dui tellus, consectetur vel quam
                    vel, vestibulum ultricies massa. Curabitur et sodales
                    tortor. Ut ac mauris mi. Nulla nec porttitor lorem.
                </SectionDescription>
            </SkillsDescriptionContent>
            <SkillList>
                {itemSkillList.map(skill => (
                    <SkillItem key={skill.name}>
                        <Circle rating={skill.rating} />
                        <SkillItemContent>{skill.icon}</SkillItemContent>
                    </SkillItem>
                ))}
            </SkillList>
        </Container>
    );
};

export default Skill;
