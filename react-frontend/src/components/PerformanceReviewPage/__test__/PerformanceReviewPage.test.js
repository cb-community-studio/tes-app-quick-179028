import React from "react";
import { render, screen } from "@testing-library/react";

import PerformanceReviewPage from "../PerformanceReviewPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders performanceReview page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <PerformanceReviewPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("performanceReview-datatable")).toBeInTheDocument();
    expect(screen.getByRole("performanceReview-add-button")).toBeInTheDocument();
});
