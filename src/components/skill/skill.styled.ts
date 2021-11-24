import styled from 'styled-components';
import { breakpoints } from '../../rules/devices';

export const Container = styled.section`
    display: grid;
    grid-gap: 1rem;
    margin: 1rem 0;
    width: 100%;
    grid-template-areas: 'info' 'skill';

    @media ${breakpoints.desktops} {
        grid-template-columns: 1fr 1fr;
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
    p {
        width: 80%;
        @media ${breakpoints.desktops} {
            width: 100%;
        }
    }
`;

export const SkillsListContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1rem;
    grid-area: skill;

    @media ${breakpoints.desktops} {
        justify-content: flex-start;
        align-items: flex-start;
    }
`;

interface SkillListProps {
    max_items: number;
}
export const SkillList = styled.ul<SkillListProps>`
    display: grid;
    padding: 0;
    margin: 0;
    grid-template-columns: repeat(
        ${({ max_items }) => max_items / 2},
        minmax(7.5rem, 1fr)
    );
    @media ${breakpoints.phones} {
        display: grid;
        grid-template-columns: repeat(
            ${({ max_items }) => max_items},
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
`;

export const SkillAnchor = styled.a`
    cursor: pointer;
    padding: 0;
    margin: 0;
    background: transparent;
`;

export const ImageSkill = styled.img`
    width: 30px;
`;
