import { render, screen, fireEvent } from '@testing-library/react';
import NestedButtons from './NestedButtons';

describe('NestedButtons Propagation Logic', () => {

    it('stops the event from bubbling to the outer container', () => {
        const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {});

        render(
            <NestedButtons
                innerMsg="INNER_CLICKED"
                outerMsg="OUTER_CLICKED"
            />
        );

        const innerButton = screen.getByRole('button', { name: /inner button/i });
        fireEvent.click(innerButton);

        // 3. VALIDATION:
        // If stopPropagation worked, alert was called exactly ONCE.
        // If it failed, it would be called TWICE (bubbling).
        expect(alertMock).toHaveBeenCalledTimes(1);
        expect(alertMock).toHaveBeenCalledWith("INNER_CLICKED");

        alertMock.mockRestore();
    });

    it('triggers the outer alert when the container is clicked directly', () => {
        const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {});

        render(
            <NestedButtons
                innerMsg="INNER_CLICKED"
                outerMsg="OUTER_CLICKED"
            />
        );

        // Find the text in the outer div and click it
        const outerText = screen.getByText(/outer container/i);
        fireEvent.click(outerText);

        expect(alertMock).toHaveBeenCalledWith("OUTER_CLICKED");

        alertMock.mockRestore();
    });
});