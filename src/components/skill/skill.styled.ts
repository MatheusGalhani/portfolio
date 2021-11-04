import styled from 'styled-components';
import { _SKILL_SECTION } from '../../constants';
import { breakpoints } from '../../rules/devices';

export const Container = styled.section`
    display: grid;
    grid-gap: 1rem;
    margin: 1rem 0;
    width: 100%;
    grid-template-areas: 'info' 'skill';
    @media ${breakpoints.tablets} {
        grid-template-columns: 1fr 1fr;
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

export const SkillsListContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1rem;
    grid-area: skill;
`;

export const SkillList = styled.ul`
    display: grid;
    grid-template-columns: repeat(
        ${_SKILL_SECTION.max_items / 2},
        minmax(7.5rem, 1fr)
    );
    @media ${breakpoints.tablets} {
        display: grid;
        grid-template-columns: repeat(
            ${_SKILL_SECTION.max_items},
            minmax(7.5rem, 1fr)
        );
    }
`;

export const SkillItem = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
    margin: 1rem 1rem 1rem 0;
    max-width: 7.5rem;
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

export const SkillButton = styled.button`
    cursor: pointer;
    padding: 0;
    margin: 0;
    background: transparent;
`;
