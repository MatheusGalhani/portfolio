import React from 'react';
import { _SKILL_SECTION } from '../../constants/constants';
import { SectionDescription, SectionTitle } from '../../styles/section.styled';
import Circle from '../circle/circle';
import {
    Container,
    SkillItem,
    SkillItemContent,
    SkillList,
    SkillsDescriptionContent,
} from './skill.styled';

const Skill: React.FC = () => {
    return (
        <Container id={_SKILL_SECTION.id}>
            <SkillsDescriptionContent>
                <SectionTitle>{_SKILL_SECTION.title}</SectionTitle>
                <SectionDescription>
                    {_SKILL_SECTION.description}
                </SectionDescription>
            </SkillsDescriptionContent>
            <SkillList>
                {_SKILL_SECTION.skills.map(skill => (
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
