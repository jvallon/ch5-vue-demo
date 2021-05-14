import { config } from "@vue/test-utils"
import * as mockCh5Wrapper from "./tests/mocks/ch5-wrapper.mock.js"

config.mocks["$api"] = mockCh5Wrapper;