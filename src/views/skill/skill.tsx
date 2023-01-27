import parse from 'html-react-parser';
import React, { Fragment, useCallback, useState } from 'react';
import { isBrowser } from 'react-device-detect';
import Circle from '../../components/circle/circle';
import { TypeAriaLabel } from '../../model/aria-label.model';
import { TypeSkill, TypeSkillSection } from '../../model/skill.model';
import { SectionDescription, SectionTitle } from '../../styles/section.styled';
import {
    Container,
    ImageSkill,
    SkillAnchor,
    SkillItem,
    SkillItemContent,
    SkillList,
    SkillsDescriptionContent,
    SkillsListContainer,
} from './skill.styled';

interface SkillProps {
    ariaLabel: TypeAriaLabel;
    skill: TypeSkillSection;
}
const Skill: React.FC<SkillProps> = ({ ariaLabel, skill: skillSection }) => {
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
        <Container id={skillSection.id}>
            <SkillsDescriptionContent>
                {!selectedSkill ? (
                    <Fragment>
                        <SectionTitle>{skillSection.title}</SectionTitle>
                        {parse(skillSection.description)}
                    </Fragment>
                ) : (
                    <Fragment>
                        <SectionTitle>{selectedSkill.name}</SectionTitle>
                        <SectionDescription>
                            {parse(selectedSkill.description)}
                        </SectionDescription>
                        <SectionDescription>
                            Rating: {(selectedSkill.rating / 10).toFixed(1)}
                        </SectionDescription>
                    </Fragment>
                )}
            </SkillsDescriptionContent>
            <SkillsListContainer>
                <SkillList max_items={skillSection.max_items}>
                    {skillSection.items.map(skill => (
                        <SkillItem key={skill.name}>
                            <SkillAnchor
                                href={`#${skillSection.id}`}
                                onClick={() => onHandleSelectedSkill(skill)}
                                onMouseEnter={() =>
                                    isBrowser && setSelectedSkill(skill)
                                }
                                aria-label={`${ariaLabel?.skill}${skill.name}`}
                            >
                                <Circle rating={skill.rating} />
                                <SkillItemContent>
                                    <ImageSkill
                                        src={skill.icon}
                                        alt={skill.name}
                                    />
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
