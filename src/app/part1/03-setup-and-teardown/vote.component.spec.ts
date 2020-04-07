import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
    let component: VoteComponent;

    beforeEach(() => {
        component = new VoteComponent();
    })

    afterEach(() => {

    })
    
    beforeAll(() => {

    })
    afterAll(() => {

    })
    
    it('should increment totalVotes when upvored', () => {

        component.upVote();

        expect(component.totalVotes).toBe(1);
    });

        it('should descrease totalVotes when downvoted', () => {

        component.downVote();
        
        expect(component.totalVotes).toBe(-1);
    });
});
