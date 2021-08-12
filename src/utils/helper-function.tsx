import { StackNavigationProp } from "@react-navigation/stack";
import { StackNavigatorParams, ScreenNames} from "@config/navigator";
import { DrawerActions } from "@react-navigation/native";
import { useAppDispatch} from "../redux/hooks";
import { resetGame } from "../redux/actions";

type helperProps = {
    navigation: StackNavigationProp<StackNavigatorParams>
};

export function openDrawer({navigation}:helperProps): any {
    navigation.dispatch(DrawerActions.openDrawer())
}

export function endGame({navigation}:helperProps): any{
    const dispatch = useAppDispatch()
    dispatch(resetGame())
    navigation.navigate(ScreenNames.Home)
}