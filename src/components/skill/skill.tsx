import React, { Fragment, useState } from 'react';
import { _SKILL_SECTION } from '../../constants';
import { TypeSkill } from '../../constants/constants.type';
import { CloseIcon } from '../../icons';
import { SectionDescription, SectionTitle } from '../../styles/section.styled';
import Circle from '../circle/circle';
import {
    Container,
    SkillAnchor,
    SkillButton,
    SkillItem,
    SkillItemContent,
    SkillList,
    SkillsDescriptionContent,
    SkillsListContainer,
    SkillTitleItemContainer,
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
                        <SkillTitleItemContainer>
                            <SectionTitle>{selectedSkill.name}</SectionTitle>
                            <SkillButton
                                onClick={() => setSelectedSkill(undefined)}
                            >
                                <CloseIcon />
                            </SkillButton>
                        </SkillTitleItemContainer>
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
                            <Circle rating={skill.rating} />
                            <SkillItemContent>
                                <SkillAnchor
                                    to={`#${_SKILL_SECTION.id}`}
                                    onClick={() => setSelectedSkill(skill)}
                                    onMouseEnter={() => setSelectedSkill(skill)}
                                >
                                    {skill.icon}
                                </SkillAnchor>
                            </SkillItemContent>
                        </SkillItem>
                    ))}
                </SkillList>
            </SkillsListContainer>
        </Container>
    );
};

export default Skill;
