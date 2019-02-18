import React from 'react';
import { shallow } from 'enzyme';

import Questionnaire from '../index';
import LandingPage from '../LandingPage';
import QuestionPage from '../QuestionPage';

describe('Questionnaire', () => {
    const component = shallow(<Questionnaire />);
    const initialAnswers = { a : 0, b : 0, c : 0, d : 0, e : 0, f : 0, g : 0, h : 0 };
    const landingPageAnswers = { a : 0, b : 3, c : 4, d : 0, e : 2, f : 1, g : 0, h : 0 };
    
    it('updates the state on mount', () => {
        const state = component.state();

        expect(state.currentSectionNumber).to.equal(0);
        expect(state.section0).to.deep.equal(landingPageAnswers);
        expect(state.section1).to.deep.equal(initialAnswers);
        expect(state.section2).to.deep.equal(initialAnswers);
        expect(state.section3).to.deep.equal(initialAnswers);
        expect(state.section4).to.deep.equal(initialAnswers);
        expect(state.section5).to.deep.equal(initialAnswers);
        expect(state.section6).to.deep.equal(initialAnswers);
        expect(state.section7).to.deep.equal(initialAnswers);
        expect(state.error).to.equal(false);
        expect(state.showResults).to.equal(false);
        expect(state.results).to.be.an('array').that.is.empty;
    });

    describe('renders the default page',  () => {
        it('renders the landingPage by default', () => {
            const LandingPageProps = component.find(LandingPage).props();
    
            expect(LandingPageProps.exampleData.sectionNumber).to.equal(0);
            expect(LandingPageProps.exampleData.titleText).to.equal('Example');
            expect(LandingPageProps.exampleData.categories).to.be.an('object');
            expect(LandingPageProps.exampleData.categories).to.have.all.keys('a', 'b', 'c', 'd', 'e', 'f');
            expect(LandingPageProps.answers).to.deep.equal(landingPageAnswers);
        });

        it('renders the next button by default', () => {
            const nextButtonProps = component.find('.NextButton').props();
    
            expect(nextButtonProps.className).to.equal('NextButton');
            expect(nextButtonProps.id).to.equal('NextButton');
            expect(nextButtonProps.type).to.equal('button');
            expect(nextButtonProps.value).to.equal('Next');
        });

        it('doesnt render the previous button', () => {
            const prevButton = component.find('.PrevButton');

            expect(prevButton).to.have.length(0);
        });
    
        it('renders the progress bar', () => {
            const progressBarProps = component.find('progress').props();
    
            expect(progressBarProps.value).to.equal(0);
            expect(progressBarProps.max).to.equal(8);
        });
    });

    describe('renders the next page on button click', () => {
        it('changes the page and increase the progress', () => {
            const nextButton = component.find('.NextButton');
            nextButton.simulate('click');

            const progressBarProps = component.find('progress').props();
            expect(progressBarProps.value).to.equal(1);
            expect(progressBarProps.max).to.equal(8);
        });

        it('renders the QuestionPage', () => {
            const QuestionPageProps = component.find(QuestionPage).props();
    
            expect(QuestionPageProps.data.sectionNumber).to.equal(1);
            expect(QuestionPageProps.data.titleText).to.equal('The main contribution I make to a team is...');
            expect(QuestionPageProps.data.categories).to.be.an('object');
            expect(QuestionPageProps.data.categories).to.have.all.keys('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h');
            expect(QuestionPageProps.answers).to.deep.equal(initialAnswers);
        });

        it('renders the next button', () => {
            const nextButtonProps = component.find('.NextButton').props();
    
            expect(nextButtonProps.className).to.equal('NextButton');
            expect(nextButtonProps.id).to.equal('NextButton');
            expect(nextButtonProps.type).to.equal('button');
            expect(nextButtonProps.value).to.equal('Next');
        });


        it('renders the previous button', () => {
            const prevButtonProps = component.find('.PrevButton').props();
    
            expect(prevButtonProps.className).to.equal('PrevButton');
            expect(prevButtonProps.id).to.equal('PrevButton');
            expect(prevButtonProps.type).to.equal('button');
            expect(prevButtonProps.value).to.equal('Prev');
        });
    });
});