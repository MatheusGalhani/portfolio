import React, { Fragment, useState } from 'react';
import { _SKILL_SECTION } from '../../constants';
import { TypeSkill } from '../../constants/constants.type';
import { SectionDescription, SectionTitle } from '../../styles/section.styled';
import Circle from '../circle/circle';
import {
    Container,
    SkillButton,
    SkillItem,
    SkillItemContent,
    SkillList,
    SkillsDescriptionContent,
    SkillsListContainer,
} from './skill.styled';

const Skill: React.FC = () => {
    const [selectedSkill, setSelectedSkill] = useState<TypeSkill | undefined>();
    return (
        <Container id={_SKILL_SECTION.id}>
            <SkillsDescriptionContent>
                {!selectedSkill ? (
                    <Fragment>
                        <SectionTitle>{_SKILL_SECTION.title}</SectionTitle>
                        <SectionDescription>
                            {_SKILL_SECTION.description}
                        </SectionDescription>
                    </Fragment>
                ) : (
                    <Fragment>
                        <SectionTitle>{selectedSkill.name}</SectionTitle>
                        <SectionDescription>
                            {selectedSkill.description}
                        </SectionDescription>
                        <SectionDescription>
                            Rating: {(selectedSkill.rating / 10).toFixed(1)}
                        </SectionDescription>
                    </Fragment>
                )}
            </SkillsDescriptionContent>
            <SkillsListContainer>
                <SkillList>
                    {_SKILL_SECTION.skills.map(skill => (
                        <SkillItem key={skill.name}>
                            <SkillButton
                                onClick={() => setSelectedSkill(skill)}
                                onMouseEnter={() => setSelectedSkill(skill)}
                                onMouseLeave={() => setSelectedSkill(undefined)}
                            >
                                <Circle rating={skill.rating} />
                                <SkillItemContent>
                                    {skill.icon}
                                </SkillItemContent>
                            </SkillButton>
                        </SkillItem>
                    ))}
                </SkillList>
            </SkillsListContainer>
        </Container>
    );
};

export default Skill;
