import reducer from '../reducer'
import appAC from '../action-creators'

describe('app/reducer', () => {
    it('tests if app/reducer works for pending action', () => {
        const state = {
            shouldDisplay: null,
            setup: {
                pending: false,
                success: false,
                error: false
            }
        };
        const action = appAC.initialSetupPending();
        const output = {
            shouldDisplay: null,
            setup: {
                pending: true,
                success: false,
                error: false
            }
        };

        expect(reducer(state, action)).toStrictEqual(output)
        
    })

    it('tests if app/reducer works for success action', () => {
        const state = {
            shouldDisplay: null,
            setup: {
                pending: true,
                success: false,
                error: false
            }
        };
        const action = appAC.initialSetupSuccess({shouldDisplay: true});
        const expectedSetup = {
            pending: false,
            success: true,
            error: false
        }

        expect(reducer(state, action).setup).toStrictEqual(expectedSetup)
        expect(reducer(state, action).shouldDisplay).toBe(true)
    })
    it('tests if app/reducer works for close action', () => {
        const state = {
            shouldDisplay: null,
            setup: {
                pending: true,
                success: false,
                error: false
            }
        };
        const action = appAC.close();
        const output = {
            shouldDisplay: false,
            setup: {
                pending: false,
                success: false,
                error: false
            }
        };

        expect(reducer(state, action)).toStrictEqual(output)
    })
})