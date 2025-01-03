import { withTheme } from "styled-components";

import { DataChart, DataChartProps } from "./DataChart.tsx";

export default withTheme(DataChart) as React.ComponentType<Omit<DataChartProps, "theme">>;
