import React, { Fragment, useCallback, useState } from 'react';
import { isBrowser } from 'react-device-detect';
import { _SKILL_SECTION } from '../../constants';
import { TypeSkill } from '../../constants/constants.type';
import { SectionDescription, SectionTitle } from '../../styles/section.styled';
import Circle from '../circle/circle';
import {
    Container,
    SkillAnchor,
    SkillItem,
    SkillItemContent,
    SkillList,
    SkillsDescriptionContent,
    SkillsListContainer,
} from './skill.styled';

const Skill: React.FC = () => {
    const [selectedSkill, setSelectedSkill] = useState<TypeSkill | undefined>();

    const onHandleSelectedSkill = useCallback(
        (skill: TypeSkill) => {
            if (selectedSkill && selectedSkill.name === skill.name) {
                setSelectedSkill(undefined);
            } else {
                setSelectedSkill(skill);
            }
        },
        [selectedSkill],
    );
    return (
        <Container id={_SKILL_SECTION.id}>
            <SkillsDescriptionContent>
                {!selectedSkill ? (
                    <Fragment>
                        <SectionTitle>{_SKILL_SECTION.title}</SectionTitle>
                        {_SKILL_SECTION.description.map(
                            (description, index) => (
                                <SectionDescription
                                    key={`${_SKILL_SECTION.id}-${index}`}
                                >
                                    {description}
                                </SectionDescription>
                            ),
                        )}
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
                            <SkillAnchor
                                to={`#${_SKILL_SECTION.id}`}
                                onClick={() => onHandleSelectedSkill(skill)}
                                onMouseEnter={() =>
                                    isBrowser && setSelectedSkill(skill)
                                }
                            >
                                <Circle rating={skill.rating} />
                                <SkillItemContent>
                                    {skill.icon}
                                </SkillItemContent>
                            </SkillAnchor>
                        </SkillItem>
                    ))}
                </SkillList>
            </SkillsListContainer>
        </Container>
    );
};

export default Skill;
