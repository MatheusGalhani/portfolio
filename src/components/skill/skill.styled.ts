import styled from 'styled-components';
import { breakpoints } from '../../rules/devices';
import { _SKILL_MAX_ITEMS } from './skill.model';

export const Container = styled.section`
    display: grid;
    grid-gap: 1rem;
    margin: 1rem 0;
    width: 100%;
    grid-template-areas: 'info' 'skill';
    @media ${breakpoints.tablets} {
        grid-template-areas: 'info skill';
    }
    @media ${breakpoints.desktops} {
        grid-template-areas: 'skill info';
    }
`;

export const SkillsDescriptionContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 1rem;
    grid-area: info;
`;

export const SkillList = styled.ul`
    grid-area: skill;
    display: grid;
    grid-template-columns: repeat(${_SKILL_MAX_ITEMS}, 1fr);
`;

export const SkillItem = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
    margin: 1rem 1rem 1rem 0;
`;

export const SkillItemContent = styled.span`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    font-size: 2rem;

    svg {
        color: ${({ theme }) => theme.color.lightBlue};
    }
`;
